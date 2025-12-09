# GCP Cloud Shell에서 Claude Code 영구 설치 가이드

## 🚀 빠른 설치 (원라이너)

GCP Cloud Shell에서 다음 명령어를 복사해서 실행하세요:

```bash
curl -fsSL https://raw.githubusercontent.com/myaji35/16_ak/main/setup-claude-code-gcp.sh | bash
```

또는 직접 설치:

```bash
# 1. npm 글로벌 경로를 HOME으로 설정
export NPM_CONFIG_PREFIX="$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"

# 2. Claude Code 설치
npm install -g @anthropic-ai/claude-code

# 3. .bashrc에 PATH 추가
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
echo 'export NPM_CONFIG_PREFIX="$HOME/.local"' >> ~/.bashrc

# 4. 부팅 스크립트 생성
cat > ~/.customize_environment << 'EOF'
#!/bin/bash
export NPM_CONFIG_PREFIX="$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"
if [ ! -f "$HOME/.local/bin/claude" ]; then
    npm install -g @anthropic-ai/claude-code > /dev/null 2>&1
fi
EOF
chmod +x ~/.customize_environment

# 5. 현재 세션에 적용
source ~/.bashrc
```

## 📋 상세 설치 방법

### 방법 1: 스크립트 사용 (권장)

1. **스크립트 다운로드 및 실행**
   ```bash
   cd ~
   wget https://raw.githubusercontent.com/myaji35/16_ak/main/setup-claude-code-gcp.sh
   bash setup-claude-code-gcp.sh
   ```

2. **설치 확인**
   ```bash
   claude --version
   which claude
   ```

### 방법 2: 수동 설치

1. **디렉토리 생성**
   ```bash
   mkdir -p ~/.local/bin
   mkdir -p ~/.config/claude-code
   ```

2. **npm 설정 변경**
   ```bash
   # npm 글로벌 설치 위치를 HOME으로 변경
   npm config set prefix ~/.local
   ```

3. **Claude Code 설치**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

4. **PATH 설정 (.bashrc)**
   ```bash
   cat >> ~/.bashrc << 'EOF'

   # Claude Code 환경 설정
   export PATH="$HOME/.local/bin:$PATH"
   export NPM_CONFIG_PREFIX="$HOME/.local"
   EOF
   ```

5. **부팅 스크립트 설정**
   ```bash
   cat > ~/.customize_environment << 'EOF'
   #!/bin/bash
   # GCP Cloud Shell 부팅 시 실행
   export NPM_CONFIG_PREFIX="$HOME/.local"
   export PATH="$HOME/.local/bin:$PATH"

   # Claude Code 자동 복구
   if [ ! -f "$HOME/.local/bin/claude" ]; then
       npm install -g @anthropic-ai/claude-code > /dev/null 2>&1
   fi
   EOF

   chmod +x ~/.customize_environment
   ```

6. **현재 세션에 적용**
   ```bash
   source ~/.bashrc
   ```

## 🔍 설치 확인

```bash
# Claude Code 실행 가능 여부 확인
which claude
# 출력: /home/<username>/.local/bin/claude

# 버전 확인
claude --version

# PATH 확인
echo $PATH | grep ".local/bin"
```

## 🛠️ 문제 해결

### 문제 1: 재접속 후 claude 명령어가 없음

**해결:**
```bash
source ~/.bashrc
```

또는 다시 설치:
```bash
npm install -g @anthropic-ai/claude-code
```

### 문제 2: npm 권한 에러

**해결:**
```bash
# npm 글로벌 경로 확인
npm config get prefix
# 출력: /home/<username>/.local (이어야 함)

# 만약 /usr/local이면 변경
npm config set prefix ~/.local
```

### 문제 3: Node.js 버전이 낮음

**해결:**
```bash
# nvm 설치 (GCP Cloud Shell)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# 최신 LTS 설치
nvm install --lts
nvm use --lts
```

## 📂 파일 위치

### 영구 저장 (재접속 후에도 유지)
- **Claude Code 실행 파일**: `~/.local/bin/claude`
- **npm 모듈**: `~/.local/lib/node_modules/@anthropic-ai/claude-code/`
- **설정 파일**: `~/.config/claude-code/`
- **환경 설정**: `~/.bashrc`, `~/.bash_profile`
- **부팅 스크립트**: `~/.customize_environment`

### 임시 저장 (재접속 시 삭제됨)
- `/tmp/` - 임시 파일
- 실행 중인 프로세스

## 🔐 API 키 설정

Claude Code 첫 실행 시 API 키가 필요합니다:

```bash
# Claude Code 실행
claude

# 또는 환경 변수로 설정
export ANTHROPIC_API_KEY="your-api-key-here"

# .bashrc에 영구 저장
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
```

**API 키 발급**: https://console.anthropic.com/settings/keys

## 🔄 업데이트

```bash
# Claude Code 업데이트
npm update -g @anthropic-ai/claude-code

# 또는 재설치
npm install -g @anthropic-ai/claude-code
```

## 🗑️ 제거

```bash
# Claude Code 제거
npm uninstall -g @anthropic-ai/claude-code

# 설정 파일 삭제
rm -rf ~/.config/claude-code
rm ~/.customize_environment

# .bashrc에서 관련 설정 제거
nano ~/.bashrc
# (Claude Code 관련 줄 삭제)
```

## 📊 디스크 사용량 확인

GCP Cloud Shell의 HOME 디렉토리는 5GB로 제한됩니다:

```bash
# HOME 디렉토리 용량 확인
du -sh ~

# Claude Code 설치 크기 확인
du -sh ~/.local/lib/node_modules/@anthropic-ai/claude-code
```

## 💡 추가 팁

### 1. Cloud Shell 세션 유지
- **20분 비활성 → 세션 종료**
- **24시간 비활성 → VM 완전 삭제**
- 장시간 작업 시 주기적으로 명령어 실행 필요

### 2. 자동 재연결
Cloud Shell Editor에서 작업하면 세션이 자동으로 유지됩니다.

### 3. Docker 컨테이너 사용
Claude Code를 Docker 컨테이너로 실행하면 더 안정적입니다:

```bash
# Dockerfile 생성
cat > ~/Dockerfile << 'EOF'
FROM node:18-slim
RUN npm install -g @anthropic-ai/claude-code
CMD ["claude"]
EOF

# 이미지 빌드 및 실행
docker build -t claude-code ~/
docker run -it -v ~/.config/claude-code:/root/.config/claude-code claude-code
```

## 🆘 도움말

- **Claude Code 공식 문서**: https://docs.anthropic.com/claude-code
- **GCP Cloud Shell 문서**: https://cloud.google.com/shell/docs
- **npm 문서**: https://docs.npmjs.com/

---

**작성일**: 2025-12-09
**테스트 환경**: GCP Cloud Shell (Debian-based)
**Node.js 버전**: 18.x, 20.x, 22.x
