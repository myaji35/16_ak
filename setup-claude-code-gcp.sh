#!/bin/bash
# GCP Cloud Shell에서 Claude Code를 영구적으로 설치하는 스크립트
# 사용법: bash setup-claude-code-gcp.sh

set -e

echo "=========================================="
echo "  Claude Code 영구 설치 (GCP Cloud Shell)"
echo "=========================================="
echo ""

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. 디렉토리 생성
echo -e "${YELLOW}[1/5]${NC} 설치 디렉토리 생성 중..."
mkdir -p ~/.local/bin
mkdir -p ~/.config/claude-code

# 2. Claude Code 설치 (npm 방식)
echo -e "${YELLOW}[2/5]${NC} Claude Code 설치 중..."

# Node.js 버전 확인
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error:${NC} Node.js가 설치되어 있지 않습니다."
    echo "GCP Cloud Shell에는 기본적으로 Node.js가 설치되어 있어야 합니다."
    exit 1
fi

echo "Node.js 버전: $(node --version)"
echo "npm 버전: $(npm --version)"

# npm 글로벌 설치 경로를 HOME 디렉토리로 변경
export NPM_CONFIG_PREFIX="$HOME/.local"

# Claude Code 설치
if [ ! -f "$HOME/.local/bin/claude" ]; then
    echo "Claude Code 설치 중..."
    npm install -g @anthropic-ai/claude-code
else
    echo "Claude Code가 이미 설치되어 있습니다."
fi

# 3. PATH 설정
echo -e "${YELLOW}[3/5]${NC} PATH 환경 변수 설정 중..."

# .bashrc에 PATH 추가 (중복 방지)
if ! grep -q "\.local/bin" ~/.bashrc 2>/dev/null; then
    cat >> ~/.bashrc << 'EOF'

# Claude Code PATH 설정
export PATH="$HOME/.local/bin:$PATH"
export NPM_CONFIG_PREFIX="$HOME/.local"
EOF
    echo "✅ .bashrc에 PATH 추가 완료"
else
    echo "✅ PATH가 이미 설정되어 있습니다."
fi

# .bash_profile에도 추가 (Cloud Shell 재시작 시)
if ! grep -q "\.local/bin" ~/.bash_profile 2>/dev/null; then
    cat >> ~/.bash_profile << 'EOF'

# Claude Code PATH 설정
export PATH="$HOME/.local/bin:$PATH"
export NPM_CONFIG_PREFIX="$HOME/.local"
EOF
    echo "✅ .bash_profile에 PATH 추가 완료"
fi

# 4. Cloud Shell 부팅 스크립트 설정
echo -e "${YELLOW}[4/5]${NC} Cloud Shell 부팅 스크립트 설정 중..."

cat > ~/.customize_environment << 'EOF'
#!/bin/bash

# GCP Cloud Shell 부팅 시 실행되는 스크립트
# Cloud Shell 재시작 시에도 Claude Code가 정상 작동하도록 설정

# npm 글로벌 경로 설정
export NPM_CONFIG_PREFIX="$HOME/.local"
export PATH="$HOME/.local/bin:$PATH"

# Claude Code 설치 확인 및 복구
if [ ! -f "$HOME/.local/bin/claude" ]; then
    echo "Claude Code가 감지되지 않았습니다. 재설치 중..."
    npm install -g @anthropic-ai/claude-code > /dev/null 2>&1
fi

echo "✅ Claude Code 환경 준비 완료"
EOF

chmod +x ~/.customize_environment
echo "✅ 부팅 스크립트 생성 완료"

# 5. 현재 세션에 PATH 적용
echo -e "${YELLOW}[5/5]${NC} 현재 세션에 설정 적용 중..."
export PATH="$HOME/.local/bin:$PATH"
export NPM_CONFIG_PREFIX="$HOME/.local"

# 설치 확인
echo ""
echo "=========================================="
echo "  ✅ 설치 완료!"
echo "=========================================="
echo ""

if command -v claude &> /dev/null; then
    echo -e "${GREEN}Claude Code 설치 위치:${NC} $(which claude)"
    echo -e "${GREEN}Claude Code 버전:${NC} $(claude --version 2>/dev/null || echo 'N/A')"
else
    echo -e "${YELLOW}주의:${NC} 현재 세션에서 claude 명령어를 사용하려면 다음 명령을 실행하세요:"
    echo "  source ~/.bashrc"
fi

echo ""
echo "📌 중요 정보:"
echo "   - 설치 위치: ~/.local/bin/claude"
echo "   - 설정 파일: ~/.config/claude-code/"
echo "   - 이 위치들은 GCP Cloud Shell 재접속 후에도 유지됩니다."
echo ""
echo "🔄 재접속 후 사용법:"
echo "   1. Cloud Shell에 재접속"
echo "   2. 자동으로 Claude Code 사용 가능"
echo "   3. 만약 안 되면: source ~/.bashrc"
echo ""
echo "🚀 Claude Code 시작하기:"
echo "   claude"
echo ""
