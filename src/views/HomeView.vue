<script setup>
import { ref, onMounted, watch } from "vue";
import { addFood, getFoods, deleteFood, updateFood,db } from "@/firebase";
import { addDoc, collection, getFirestore, getDocs  } from "firebase/firestore";
import * as XLSX from "xlsx";

const foods = ref([]);
const newFood = ref({ type: "", food: "", address: "", phoneNumber: "" });
const editingFood = ref(null); // Lưu trữ món ăn đang chỉnh sửa
const file = ref(null);
const foodsCollection = collection(db, "food"); // Collection Firestore
const fetchFoods = async () => {
  foods.value = await getFoods();
};
const searchText = ref(""); // Biến lưu nội dung tìm kiếm
const allFoods = ref([]); // Danh sách tất cả món ăn
const filteredFoods = ref([]); // Danh sách lọc theo từ khóa


// 🔥 Lấy tất cả dữ liệu từ Firestore khi component được tải
const fetchFoods1 = async () => {
  try {
    const querySnapshot = await getDocs(foodsCollection);
    allFoods.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    filteredFoods.value = allFoods.value; // Ban đầu hiển thị toàn bộ dữ liệu
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ Firestore:", error);
  }
};

// 🔎 Lọc danh sách món ăn theo từ khóa nhập vào
watch(searchText, (newText) => {
  if (!newText) {
    filteredFoods.value = allFoods.value; // Nếu ô tìm kiếm trống, hiển thị tất cả
  } else {
    const keyword = newText.toLowerCase().trim();
    filteredFoods.value = allFoods.value.filter(food =>
      food.food.toLowerCase().includes(keyword)
    );
  }
});
fetchFoods1();
// 🆕 Thêm món ăn mới
const addNewFood = async () => {
  if (!newFood.value.food || !newFood.value.phoneNumber) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  await addFood(newFood.value);
  newFood.value = { type: "", food: "", address: "", phoneNumber: "" };
  fetchFoods();
};

// 🗑️ Xóa món ăn
const removeFood = async (id) => {
  await deleteFood(id);
  fetchFoods();
};

// ✏️ Chỉnh sửa món ăn
const editFood = (food) => {
  editingFood.value = { ...food }; // Copy dữ liệu vào form chỉnh sửa
};

// 🔄 Lưu món ăn đã chỉnh sửa
const saveEdit = async () => {
  if (!editingFood.value) return;

  await updateFood(editingFood.value.id, {
    type: editingFood.value.type,
    food: editingFood.value.food,
    address: editingFood.value.address,
    phoneNumber: editingFood.value.phoneNumber,
  });

  editingFood.value = null; // Đóng form chỉnh sửa
  fetchFoods();
};

onMounted(fetchFoods);



const importExcel = async (event) => {
  const selectedFile = event.target.files[0];
  if (!selectedFile) return;

  const reader = new FileReader();
  reader.readAsArrayBuffer(selectedFile);
  
  reader.onload = async (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 📄 Chuyển dữ liệu từ Excel thành JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log("Dữ liệu Excel:", jsonData);

    // 📝 Insert từng dòng vào Firestore
    for (const food of jsonData) {
      await addDoc(foodsCollection, {
        type: food.Type || "",          // Lấy giá trị cột Type
        food: food.Food || "",          // Lấy giá trị cột Food
        address: food.Address || "",    // Lấy giá trị cột Address
        phoneNumber: food.PhoneNumber || "" // Lấy giá trị cột PhoneNumber
      });
    }

    alert("Nhập dữ liệu thành công!");
  };
};

</script>

<template>
  <div class="container">
    <div> <div>
    <h2>Tìm kiếm món ăn</h2>
    <input 
      type="text" 
      v-model="searchText" 
      placeholder="Nhập tên món ăn..."
    />

    <!-- Hiển thị danh sách kết quả -->
    <ul>
      <li v-for="food in filteredFoods" :key="food.id">
        {{ food.food }} - {{ food.type }}
      </li>
    </ul>
  </div></div>
    <h1>FoodApp - Quản lý món ăn</h1>

    <div class="form">
      <input v-model="newFood.type" placeholder="Loại món ăn" />
      <input v-model="newFood.food" placeholder="Tên món ăn" />
      <input v-model="newFood.address" placeholder="Địa chỉ" />
      <input v-model="newFood.phoneNumber" placeholder="Số điện thoại" />
      <button @click="addNewFood">Thêm món ăn</button>
    </div>

    <div v-if="foods.length">
      <h2>Danh sách món ăn</h2>
      <ul>
        <li v-for="food in foods" :key="food.id">
          {{ food.type }} - {{ food.food }} ({{ food.address }}) - {{ food.phoneNumber }}
          <button @click="editFood(food)">✏️ Sửa</button>
          <button @click="removeFood(food.id)">🗑️ Xóa</button>
        </li>
      </ul>
    </div>

    <!-- Form chỉnh sửa món ăn -->
    <div v-if="editingFood" class="edit-form">
      <h2>Chỉnh sửa món ăn</h2>
      <input v-model="editingFood.type" placeholder="Loại món ăn" />
      <input v-model="editingFood.food" placeholder="Tên món ăn" />
      <input v-model="editingFood.address" placeholder="Địa chỉ" />
      <input v-model="editingFood.phoneNumber" placeholder="Số điện thoại" />
      <button @click="saveEdit">Lưu</button>
      <button @click="editingFood = null">Hủy</button>
    </div>
  </div>

  <div>
    <h2>Import Excel vào Firestore</h2>
    <input type="file" @change="importExcel" />
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

li {
  padding: 8px;
  cursor: pointer;
}

li:hover {
  background: #f0f0f0;
}
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.form, .edit-form {
  margin-bottom: 20px;
}
input {
  display: block;
  margin: 5px auto;
  padding: 8px;
  width: 80%;
}
button {
  margin: 5px;
  padding: 8px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  color: black;
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
}
</style>
