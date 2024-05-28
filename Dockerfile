# 1단계: 빌드 단계
FROM node:20 AS build

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# 패키지 파일을 복사하고 의존성을 설치합니다.
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 코드를 복사합니다.
COPY . .

# 애플리케이션을 빌드합니다.
RUN npm run build

# 2단계: 실행 단계
FROM nginx:1.23

# 빌드된 React 앱을 NGINX HTML 디렉토리로 복사합니다.
COPY --from=build /app/build /usr/share/nginx/html

# NGINX 포트를 외부에 노출합니다.
EXPOSE 80

# NGINX를 포그라운드 모드로 실행합니다.
CMD ["nginx", "-g", "daemon off;"]