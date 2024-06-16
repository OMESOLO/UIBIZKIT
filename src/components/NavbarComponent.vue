<template>
    <div id="app">
      <header class="navbar-container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link to="/editstocks">
              <img class="product-img" src="https://www.bizkitonline.com/images/bizkit-logo.png" alt="Bizkit Logo">
            </router-link>
          </div>
          <div class="navbar-menu">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
          </div>
        </nav>
      </header>
      <aside class="sidebar">
        <router-link to="/" class="sidebar-item">สินค้าคงคลัง</router-link>
      </aside>
    </div>
  </template>
  
  <style scoped>
  .navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: whitesmoke;
    /* สีพื้นหลัง */
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3%;
    border-bottom: 1px solid #444;
    /* เพิ่มเส้นแบ่งด้านล่าง */
  }
  
  .navbar-brand img {
    height: 50px;
    /* ปรับขนาดโลโก้ */
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  
  .navbar-item {
    margin-left: 20px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .navbar-item:hover {
    color: #f0a500;
  
  }
  
  .sidebar {
    position: fixed;
    left: 0;
    top: 70px; 
    width: 250px;
    height: calc(100vh - 70px); 
    background-color: #f0f0f0; 
    padding: 20px;
    box-sizing: border-box;
    border-right: 1px solid #ccc; 
    z-index: 999;
  }
  
  .sidebar-item {
    display: block;
    margin-bottom: 15px;
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .sidebar-item:hover {
    color: #f0a500;
    /* สีเมื่อเอาเมาส์ชี้ */
  }
  
  .main-content {
    margin-left: 200px; 
    padding: 20px;
  }
  </style>
  