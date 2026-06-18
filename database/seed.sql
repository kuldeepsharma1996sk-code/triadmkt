-- ============================================================
-- TRIAD Marketing Services — Smart Scheme Seed Data
-- ============================================================

USE triad_smart_scheme;

-- Roles
INSERT INTO roles (role_name) VALUES
('Admin'),
('Dispatcher'),
('Client');

-- Users
INSERT INTO users (username, email, password_hash, role_id) VALUES
('client_admin', 'admin@triadmkt.com', '$2a$12$D39S0kG24.4mNspLsk/RkuUq7j.XGZ0.v3B7gI264.44H6J6v02uG', 1),
('dispatcher_ops', 'ops@triadmkt.com', '$2a$12$D39S0kG24.4mNspLsk/RkuUq7j.XGZ0.v3B7gI264.44H6J6v02uG', 2),
('partner_horizon', 'horizon@retail.com', '$2a$12$D39S0kG24.4mNspLsk/RkuUq7j.XGZ0.v3B7gI264.44H6J6v02uG', 3);

-- Partners
INSERT INTO partners (name, contact_person, email, phone) VALUES
('Horizon Retail Systems', 'John Doe', 'horizon@retail.com', '+919876543210'),
('Vanguard Tech Distributors', 'Jane Smith', 'vanguard@tech.com', '+919876543211'),
('Apex Commercial Corp', 'Robert Johnson', 'apex@commercial.com', '+919876543212');

-- Schemes
INSERT INTO schemes (scheme_name, start_date, end_date, is_active) VALUES
('Q1 Channel Growth Drive', '2026-01-01', '2026-03-31', TRUE),
('Annual Partner Loyalty Circle', '2026-01-01', '2026-12-31', TRUE);

-- Partner Scheme Enrollments & Points
INSERT INTO partner_schemes (partner_id, scheme_id, accumulated_points, allocated_points) VALUES
(1, 1, 350000, 450000),
(2, 1, 620000, 800000),
(3, 2, 240000, 250000);

-- Inventory Items
INSERT INTO inventory (sku, item_name, current_stock, allocated_stock) VALUES
('SKU-TECH-KIT-V2', 'Premium Tech Kit v2', 1500, 450),
('SKU-EXEC-TRAVEL', 'Executive Travel Set', 800, 320),
('SKU-LTHR-FOLIO', 'Minimalist Leather Folio', 2000, 85);

-- Dispatches
INSERT INTO dispatches (partner_id, item_id, quantity, status, created_at, verified_at, delivered_at) VALUES
(1, 1, 150, 'Delivered', '2026-06-10 10:00:00', '2026-06-10 10:30:00', '2026-06-10 13:12:00'),
(2, 2, 320, 'Dispatched', '2026-06-10 11:15:00', '2026-06-10 11:45:00', NULL),
(3, 3, 85, 'Pending Verification', '2026-06-10 14:00:00', NULL, NULL);
