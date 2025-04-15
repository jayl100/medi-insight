# 1. Node.js 18 이미지 사용
FROM node:18

# 2. 컨테이너 내부 작업 디렉토리 지정
WORKDIR /app

# 3. package.json, lock 파일 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 전체 코드 복사
COPY . .

# 6. 컨테이너 시작 시 실행할 명령어
CMD ["npm", "run", "dev"]
