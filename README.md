# 🐻 도레미곰 독후활동 포털 (DoReMi Gom Activity Studio)

엄마표 프리미엄 도레미곰 독후활동지 3종 통합 웹 포털입니다.  
GitHub Pages를 통해 웹 브라우저, 스마트폰, 태블릿에서 즉시 접속하여 인쇄 및 인터랙티브 활동을 즐길 수 있습니다.

---

## 📁 폴더 구성 (Directory Structure)

```text
Github/
├── index.html               # 🌟 메인 통합 포털 (3개 탭 전환 및 반응형 뷰어)
├── README.md                # 깃허브 배포 가이드
│
├── 1_toktok/                # 🌧️ 1. 톡톡톡 괜찮아
│   ├── index.html           # 8P 활동지 인쇄 + 인터랙티브 선잇기 & 우산 씌우기 게임
│   ├── style.css
│   ├── script.js
│   └── assets/              # 동물 & 우산 고해상도 그래픽
│
├── 2_domino/                # 🎲 2. 동물도미노
│   ├── index.html, domino.html   # 13마리 동물 실물 크기 3D 도미노 박스 전개도 (A4 15P)
│   ├── style.css
│   ├── script.js
│   └── animals_web/         # 초고화질 동물 전개도 및 웹 최적화 투명 PNG 이미지 (7.7 MB)
│
└── 39_lantern/              # 🏮 39. 등불이 있으면 무섭지 않아
    ├── index.html           # 3D 랜턴 조립 시뮬레이터 & 크리컷 도안 다운로더
    ├── cricut_lantern_12x12_all_in_one.svg   # 12x12 올인원 완벽 컷팅 도안
    ├── cricut_lantern_roof_and_base.svg      # 지붕 및 바닥 도안
    ├── cricut_lantern_letter_part1.svg       # 레터/A4 분할 Part 1
    ├── cricut_lantern_letter_part2.svg       # 레터/A4 분할 Part 2
    └── cricut_lantern_vellum_inserts.svg     # 반투명 유산지 패널 도안
```

---

## 🚀 GitHub Pages 3단계 배포 가이드 (Deployment Guide)

### 1단계: GitHub 새 저장소(Repository) 만들기
1. [GitHub](https://github.com)에 로그인 후, 우측 상단 **`+`** 버튼 -> **`New repository`** 클릭
2. **Repository name** 입력 (예: `doremigom-activities` 또는 원하는 이름)
3. **Public** 선택
4. **Create repository** 클릭

### 2단계: 파일 업로드하기
* **방법 A (웹 드래그 앤 드롭 - 가장 간편함):**
  1. 생성된 저장소 화면에서 **`uploading an existing file`** 링크 클릭
  2. 현재 내 컴퓨터의 **`Github` 폴더 안에 있는 모든 내용**(`index.html`, `1_toktok`, `2_domino`, `39_lantern`)을 브라우저 화면으로 드래그 앤 드롭
  3. 화면 아래 **`Commit changes`** 버튼 클릭
* **방법 B (Git CLI 터미널 사용 시):**
  ```bash
  cd "c:\Users\rlee2\Documents\독후활동\Github"
  git init
  git add .
  git commit -m "Initial commit of DoReMi Gom activities portal"
  git branch -M main
  git remote add origin https://github.com/<본인아이디>/<저장소이름>.git
  git push -u origin main
  ```

### 3단계: GitHub Pages 켜기
1. 저장소 상단 메뉴에서 **`Settings`** (설정) 탭 클릭
2. 왼쪽 사이드바에서 **`Pages`** 클릭
3. **Build and deployment > Source**에서:
   * Branch: **`main`** (또는 `master`) 선택
   * Folder: **`/ (root)`** 선택
4. **`Save`** 버튼 클릭!
5. 약 1~2분 후 상단에 표시되는 링크(`https://<본인아이디>.github.io/<저장소이름>/`)로 접속하면 3개 탭이 포함된 멋진 독후활동 포털이 전 세계 어디서나 열립니다! 🎉

---

## ✨ 핵심 기능 요약

1. **원클릭 3탭 전환**: 3개 활동지 페이지를 상단 탭 하나로 자유롭게 이동 (음악 및 인터랙티브 진행 상태 유지)
2. **단독 전체화면 버튼**: 우측 상단 `↗️ 새 창으로 열기`를 누르면 언제든지 개별 활동지 단독 화면으로 이동하여 인쇄나 전체화면 작업 가능
3. **URL 해시 다이렉트 링크 지원**:
   * `#toktok` : 1. 톡톡톡 괜찮아 바로 열기
   * `#domino` : 2. 동물도미노 바로 열기
   * `#lantern` : 39. 등불이 있으면 무섭지 않아 바로 열기
4. **A4 즉시 인쇄 최적화**: 브라우저 표준 인쇄(`Ctrl+P` 또는 페이지 내 인쇄 버튼) 시 페이지 구분선과 여백이 정밀하게 세팅되어 즉시 출력 가능
