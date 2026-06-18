-- ============================================================
-- TRIAD Marketing Services — Smart Scheme Database Schema
-- Engine: MySQL 8.0+
-- ============================================================

CREATE DATABASE IF NOT EXISTS triad_smart_scheme;
USE triad_smart_scheme;

-- Role-Based Access Control (RBAC)
CREATE TABLE IF NOT EXISTS roles (
  role_id INT AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

-- Partners & Schemes
CREATE TABLE IF NOT EXISTS partners (
  partner_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS schemes (
  scheme_id INT AUTO_INCREMENT PRIMARY KEY,
  scheme_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS partner_schemes (
  partner_scheme_id INT AUTO_INCREMENT PRIMARY KEY,
  partner_id INT NOT NULL,
  scheme_id INT NOT NULL,
  accumulated_points INT DEFAULT 0,
  allocated_points INT DEFAULT 0,
  FOREIGN KEY (partner_id) REFERENCES partners(partner_id),
  FOREIGN KEY (scheme_id) REFERENCES schemes(scheme_id)
);

-- Inventory & Dispatch
CREATE TABLE IF NOT EXISTS inventory (
  item_id INT AUTO_INCREMENT PRIMARY KEY,
  sku VARCHAR(100) NOT NULL UNIQUE,
  item_name VARCHAR(255) NOT NULL,
  current_stock INT DEFAULT 0,
  allocated_stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dispatches (
  dispatch_id INT AUTO_INCREMENT PRIMARY KEY,
  partner_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  status ENUM('Pending Verification', 'Verified', 'Dispatched', 'Delivered') DEFAULT 'Pending Verification',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  verified_at TIMESTAMP NULL,
  delivered_at TIMESTAMP NULL,
  FOREIGN KEY (partner_id) REFERENCES partners(partner_id),
  FOREIGN KEY (item_id) REFERENCES inventory(item_id)
);
