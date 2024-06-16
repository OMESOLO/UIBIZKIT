<template>
    <div class="edit-stock-container">
        <h2 class="edit-stock-title">สร้าง/แก้ไข การปรับสต็อก</h2>
        <form class="form-horizontal">
            <div class="form-row">
                <div class="form-l">
                    <div class="form-group">
                        <label for="Productnumber">เลขที่ปรับสินค้า</label>
                        <input type="text" id="Productnumber" disabled placeholder="--ออกโดยระบบ--">
                    </div>
                    <div class="form-group">
                        <label for="warehouse">คลังสินค้า</label>
                        <select id="warehouse">
                            <option value="">เลือก</option>
                            <option value="banana warehouse">คลังกล้วย</option>
                            <option value="main warehouse">คลังหลัก</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="responsible-person">ผู้รับผิดชอบ</label>
                        <select id="responsible-person">
                            <option value="">เลือก</option>
                            <option value="chayanon">ชญานนท์</option>
                            <option value="phitipaht">พิธิพัฒน์</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="note">หมายเหตุ</label>
                        <textarea id="note" rows="5"></textarea>
                    </div>
                </div>
                <div class="form-r">
                    <div class="form-group">
                        <label for="datetime">วันที่ออกเอกสาร</label>
                        <input type="date" id="datetime">
                    </div>
                    <div class="form-group">
                        <label for="product-adjustment">การปรับสินค้า</label>
                        <select id="product-adjustment">
                            <option value="">เลือก</option>
                            <option value="ปรับเพิ่ม">ปรับเพิ่ม(+)</option>
                            <option value="ปรับลด">ปรับลด(-)</option>
                            <option value="ปรับลดจากนับสต๊อค">ปรับลดการนับสต๊อค(-)</option>
                            <option value="ปรับเพิ่มจากนับสต๊อค">ปรับเพิ่มจากนับสต๊อค(+)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Reference-number">หมายเลขอ้างอิง</label>
                        <input type="text" required>
                    </div>
                </div>
            </div>
            <div class="product-list">
                <h3>รายการสินค้า</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>รูป</th>
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>เลขล็อค/ซีเรียล</th>
                            <th>วันหมดอายุ</th>
                            <th>ไลเคชั่น-ชั้น</th>
                            <th>คงเหลือ</th>
                            <th>พร้อมใช้</th>
                            <th>จำนวนที่ปรับ</th>
                            <th>หน่วย</th>
                            <th>ราคา</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="black-text">1</td>
                            <td class="product-image">
                                <img class="product-img" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-photo_90514.png" alt="Product Image">
                            </td>
                            <td>
                                <div class="form-group">
                                    <select>
                                        <option value="">เลือก</option>
                                    </select>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="form-group">
                                    <select>
                                        <option value="">เลือก</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <select>
                                        <option value="">เลือก</option>
                                    </select>
                                </div>
                            </td>
                            <td></td>
                            <td class="remaining-text">0.00</td>
                            <td class="Readyuse-text">0.00</td>
                            <td>
                                <div>
                                    <input type="text" class="small-input" required>
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <select>
                                        <option value="">เลือก</option>
                                    </select>
                                </div>
                            </td>
                            <td><input type="text" class="small-input" disabled value="0.00"></td>
                            <td>
                                <div>
                                    <textarea rows="2"></textarea>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="action-new">
                    <button class="btn-primary">เพิ่มสินค้า</button>
                </div>
            </div>
            <div>
                <button class="save">บันทึก</button>
                <button class="save_approve">บันทึกและอนุมัติ</button>
                <button class="cancel">ยกเลิก</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .edit-stock-container {
        max-width: 1280px;
        margin: auto;
        padding: 30px 90px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin-top: 60px;
        display: block;
    }

    .edit-stock-title {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #333;
        white-space: nowrap;
    }

    .form-horizontal {
        display: flex;
        flex-direction: column;
    }

    .form-row {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 2rem;
    }

    .form-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
    }

    .form-actions {
        display: flex;
        justify-content: flex-end; 
        margin-top: 20px; 
    }

    label {
        display: block;
        font-weight: bold;
        margin-right: 10px;
        width: 200px;
        color: #333;
    }

    input[type="text"],
    select,
    textarea,
    input[type="date"] {
        flex: 1;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        color: #495057;
    }

    textarea {
        min-width: 50%;
        max-width: 100%;
    }

    .small-input {
        padding: 5px;
        font-size: 14px;
        width: 60px; 
    }

    input[type="text"]:disabled,
    select:disabled,
    textarea:disabled {
        background-color: #e9ecef;
        cursor: not-allowed;
    }

    input[type="text"]:hover,
    select:hover,
    textarea:hover,
    input[type="date"]:hover {
        border-color: #555;
    }

    input[type="text"]:focus,
    select:focus,
    textarea:focus,
    input[type="date"]:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .product-list h3 {
        color: black;
        font-size: 24px;
        margin-top: 5%;
    }
    
    .product-list table thead th {
        color: black;
    }

    .product-list {
        margin-top: 20px;
    }

    .product-list table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    .product-list table th,
    .product-list table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    .product-list table th {
        background-color: #f2f2f2;
        color: #333;
    }

    .product-img {
        max-width: 50px;
        max-height: 50px;
        width: auto;
        height: auto;
    }

    .black-text {
        color: black;
    }

    .remaining-text{
        color: black;
    }


    .Readyuse-text{
        color: blue;
    }

    .btn-primary {
        background-color: #599dd1;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        transition: background-color 0.3s;
        margin-top: 1%;
        margin-left: 87%;
    }

    .btn-primary:hover {
        background-color: #63a3e7;
    }

    .save {
        background-color: rgb(28, 92, 220);
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        transition: background-color 0.3s;
        margin-left: 705px;
        margin-top: 1%;
    }

    .save:hover {
        background-color: #63a3e7;
    }

    .save_approve {
        background-color: rgb(28, 92, 220);
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        transition: background-color 0.3s;
        margin-left: 10px;
        
    }

    .save_approve:hover {
        background-color: #63a3e7;
    }
    
    .cancel {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        transition: background-color 0.3s;
        margin-left: 10px;
    }

    .cancel:hover {
        background-color: orange;
    }
   
</style>