# Sử dụng một hình ảnh chứa Node.js và npm
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package.json .
COPY package-lock.json* ./

# Cài đặt các dependency
RUN npm install

# Copy toàn bộ code vào thư mục làm việc
COPY . .


# Build ứng dụng Next.js
RUN npm run build

RUN npx prisma generate

# Port mà ứng dụng sẽ lắng nghe trên
EXPOSE 3000

# Khởi chạy ứng dụng khi container được khởi động
CMD ["npm", "start"]
