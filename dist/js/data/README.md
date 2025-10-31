# Mock Data Guide

## Cách lấy dữ liệu từ API và cập nhật Mock Data

### 1. Lấy dữ liệu từ API thực

Mở Developer Console trong trình duyệt và chạy đoạn code sau để lấy dữ liệu từ API:

```javascript
// Lấy token từ HTML
const token = document.body.getAttribute('data-key');
const params = new URLSearchParams(window.location.search);

// Gọi API
fetch('https://api.ulems.my.id/api/v2/config', {
  headers: {
    'Authorization': `Bearer ${params.get('k') ?? token}`
  }
})
.then(res => res.json())
.then(data => {
  console.log('API Response:', data);
  // Copy dữ liệu này và paste vào mock-config.js
  console.log('Copy this to mock-config.js:');
  console.log(JSON.stringify(data, null, 2));
});
```

### 2. Cập nhật file mock-config.js

Sau khi có dữ liệu từ API, mở file `js/data/mock-config.js` và cập nhật:

```javascript
export const mockConfigData = {
  code: 200,
  data: {
    // Paste dữ liệu từ API vào đây
    is_confetti_animation: true,
    tz: "Asia/Jakarta",
    // ... các field khác từ API
  }
};
```

### 3. Cấu trúc dữ liệu mẫu

Dữ liệu từ API `/api/v2/config` thường có cấu trúc:

```json
{
  "code": 200,
  "data": {
    "is_confetti_animation": true,
    "tz": "Asia/Jakarta",
    "wedding_date": "2023-03-15 10:00",
    "bride_name": "...",
    "groom_name": "...",
    // ... các trường khác
  }
}
```

### 4. Chuyển đổi giữa Mock và API thực

**Sử dụng Mock Data (hiện tại):**
- File: `js/app/guest/guest.js` (dòng 412)
- Code: `Promise.resolve(mockConfigData)`

**Chuyển về API thực:**
- Uncomment code ở dòng 439-458 trong `guest.js`
- Comment lại code mock data ở dòng 411-436

### 5. Lưu ý

- Mock data giúp phát triển offline và tăng tốc độ load
- Nhớ cập nhật mock data khi API có thay đổi
- Kiểm tra kỹ các trường dữ liệu quan trọng như:
  - `is_confetti_animation`: Hiệu ứng confetti
  - `tz`: Timezone
  - Các thông tin về đám cưới
