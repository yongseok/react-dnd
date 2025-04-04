# 폴더 구조

```zsh
my-chess-dnd/
├── public/                 # 정적 파일 (HTML, favicon 등)
│   ├── index.html
│   └── favicon.ico
├── src/                    # 소스 코드
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Knight/         # 나이트 컴포넌트 관련
│   │   │   ├── Knight.js
│   │   │   └── Knight.css  # 스타일 (선택적)
│   │   ├── Square/         # 스퀘어 컴포넌트 관련
│   │   │   ├── Square.js
│   │   │   └── Square.css
│   │   └── Board/          # 보드 컴포넌트 관련
│   │       ├── Board.js
│   │       └── Board.css
│   ├── constants/          # 상수 정의
│   │   └── ItemTypes.js    # 드래그 앤 드롭 타입 상수
│   ├── game/               # 게임 로직 및 상태 관리
│   │   └── Game.js         # 나이트 위치 관리 및 observe 함수
│   ├── App.js              # 최상위 컴포넌트
│   ├── index.js            # 엔트리 포인트 (ReactDOM.render)
│   └── styles/             # 전역 스타일 (선택적)
│       └── App.css
├── package.json            # 프로젝트 설정 및 의존성
└── README.md               # 프로젝트 설명
```
