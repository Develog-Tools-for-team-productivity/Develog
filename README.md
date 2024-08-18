![title](https://github.com/user-attachments/assets/96563f5c-0b4c-482b-ac38-6ce739fa66ee)

![dora](https://github.com/user-attachments/assets/9cd3d39c-9880-4ebc-8542-51e1ad596f46)

<div align="center">어느날 문득 매일 아침 교통 체증에 갇혀 있는 저를 발견했습니다.<br> 이 시간에 얼마나 많은 일을 할 수 있을까 생각하며, 개발팀도 이런 '체증'에 빠져있진 않을까 고민하게 되었고 교통 정보 앱으로 최적의 경로를 찾아 시간을 절약하는 것처럼, 개발 과정도 이런 도구가 있으면 좋겠다는 생각이 들었습니다. 일을 하다 보면 어디서 시간을 허비하는지, 어떤 작업이 진행을 방해하는지 파악하기 어려울 때가 많았던 경험들이 떠올랐습니다. 그래서 '개발 내비게이션'을 만들어보면 좋겠다는 생각을 하였습니다. 이 도구로 팀의 잠재력을 최대한 끌어올리고, 모두가 더 효율적으로, 더 즐겁게 일할 수 있기를 바라며 이 프로젝트를 만들게 되었습니다.
</div>
<br>
<div align="center"><a href="https://develog.jeongsohee.com">Deployed website</a> | <a href="https://github.com/Develog-Tools-for-team-productivity">Web Repository</a>
<br></div>

<br>

# ✔︎ Tech Stack

### Environment

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=ffffff"/> <img src="https://img.shields.io/badge/github-1677FF?style=for-the-badge&logo=github&logoColor=ffffff"/>

### Client

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/react-0088cc?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/jotai-005571?style=for-the-badge&logo=jotai&logoColor=ffffff"/> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff"/><br>

> <b>상태관리 라이브러리로 Jotai를 선택한 이유</b>는 atom 기반 접근 방식으로 상태를 작은 단위로 분리하고 조합할 수 있게 해주어, 코드의 재사용성과 유지보수성을 높일 수 있어 선택하였습니다. 또한 React Hooks와 자연스럽게 연동되어 사용할 수 있고 보일러플레이트 코드가 거의 필요하지않아 개발시간을 단축 시킬 수 있다는 장점도 있어 선택하게 되었습니다.

> <b>빌드 도구로 Vite를 선택한 이유는</b> Cold Start 시 번들링 과정을 거치지 않고 네이티브 ES 모듈을 직접 사용함으로써 빠르게 개발 서버를 시작할 수 있다는 장점과 Vitest에서 Vite의 설정을 그대로 사용할 수 있어, 별도의 테스트 설정이 거의 필요 없어 설정의 일관성을 유지하고 관리 부담을 줄여줄 수 있어 선택하게 되었습니다.

### Server

<img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/express-9999FF?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/><br>

> <b>데이터베이스로 mongoDB를 선택한 이유</b>는 스키마리스 데이터베이스라서 데이터를 저장할 때, 데이터의 형식을 미리 정해놓지 않아도 되어서 로그 데이터 같은 비정형 데이터, 즉 다양한 형태의 데이터를 저장해야 하기에 MongoDB가 적합하다고 생각되어서 선택하게 되었습니다. 또한 로그 데이터는 중첩된 구조를 가지고 있어 한 로그 항목 안에 여러 개의 이벤트가 포함될 수 있습니다. MongoDB는 데이터를 JSON과 유사한 형식인 BSON(Binary JSON)으로 저장하여 복잡한 데이터 구조를 쉽게 표현할 수 있게 해주어서 선택하게 되었습니다.

### Deployment

<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify-&logoColor=black"/> <img src="https://img.shields.io/badge/render-FF4747?style=for-the-badge&logo=render-&logoColor=white"/>

> <b>배포 툴로 Netlify와 Render를 선택한 이유</b>는 간편하게 Git 저장소와 연동되어 push만으로 자동 배포가 가능하고 코드 변경사항을 자동으로 감지하고 배포하여 개발 워크플로우를 효율화할 수 있어 선택하게 되었습니다.

### Test

<img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest-&logoColor=white"/> <img src="https://img.shields.io/badge/supertest-38A1CE?style=for-the-badge&logo=supertest-&logoColor=white"/>

# 📍 목차

- [DORAMetrics란?](#-dorametrics란)
- [사용자에게 어떻게 데이터를 한눈에 보여줄 수 있을까?](#-사용자에게-어떻게-데이터를-한눈에-보여줄-수-있을까)
- [Develog의 화면 별 기능들](#-develog의-화면-별-기능들)
- [프로젝트를 진행하며 고민했던 점](#-프로젝트를-진행하며-고민했던-점)
- [Schedules](#-schedules)
- [회고](#-회고)

# 📍 DORAMetrics란?

<img width="694" alt="스크린샷 2024-08-08 오후 3 21 39" src="https://github.com/user-attachments/assets/7bb56a98-bac5-4f78-adc2-5401602fb7a7"><br>

> DORA (DevOps Research and Assessment) Metrics는 소프트웨어 개발 및 운영 팀의 성과를 측정하는 주요 지표입니다.<br>
> Google Cloud의 DevOps Research and Assessment 팀이 개발한 메트릭스는 4가지 핵심 지표로 구성됩니다. <br>

✔︎ 배포 빈도 (Deployment Frequency)<br> 개발팀이 프로덕션 또는 엔드유저에게 얼마나 자주 새로운 코드를 릴리스하는지를 측정합니다. 높은 배포 빈도는 팀이 작은 단위로 자주 변경사항을 전달할 수 있음을 의미하며, 이는 더 빠른 피드백과 위험 감소로 이어집니다.<br><br>
✔︎ 변경 적용 소요 시간 (Lead Time for Changes)<br> 코드 변경이 커밋된 시점부터 프로덕션에 성공적으로 배포되기까지 걸리는 시간입니다. 이 시간이 짧을수록 팀이 새로운 기능이나 수정사항을 빠르게 제공할 수 있음을 의미합니다.<br><br>
✔︎ 변경 실패율 (Change Failure Rate)<br> 프로덕션에 배포된 변경사항 중 실패로 이어지는 비율입니다. 여기서 실패는 즉각적인 수정, 롤백, 패치 등이 필요한 상황을 의미합니다. 낮은 변경 실패율은 팀의 코드 품질과 테스트 프로세스가 효과적임을 나타냅니다.<br><br>
✔︎ 서비스 복구 시간 (Time to Restore Service)<br> 서비스 중단이나 품질 저하가 발생했을 때, 정상 상태로 복구하는 데 걸리는 시간입니다. 이 시간이 짧을수록 팀이 문제에 빠르게 대응하고 해결할 수 있는 능력이 있음을 의미합니다.<br>

높은 배포 빈도와 짧은 변경 적용 소요 시간은 팀의 민첩성을, 낮은 변경 실패율과 빠른 서비스 복구 시간은 팀의 안정성을 나타냅니다.<br>
<b>이 지표들을 통해 개발팀은 자신들의 소프트웨어 개발 및 운영 프로세스의 효율성과 안정성을 객관적으로 평가하고 개선할 수 있다 생각이 되어 develop에 접목하였습니다.</b>

# 🔍 사용자에게 어떻게 데이터를 한눈에 보여줄 수 있을까?

<img src="https://github.com/user-attachments/assets/14045fd8-7d8a-40cb-b1c5-5b9eed9bf0b1" width="600" alt="데이터베이스"><br>
<br>
프로젝트 기획단계에서 많은 양의 데이터를 사용자에게 어떻게 효율적으로 시각화하여 전달할 수 있을까하는 고민을 하였습니다.<br>
집계 데이터를 효과적으로 시각화하고 사용자에게 직관적으로 제공하기 위해 도넛 차트와 선 차트로 사용자가 쉽게 확인 할 수 있도록 하였습니다.
<br><br>
<img src="https://github.com/user-attachments/assets/9daf56e1-e971-488b-abe1-e239b52decb6" width="600" alt="대쉬보드이미지"><br>
<img src="https://github.com/user-attachments/assets/e72ca6d9-904a-4871-a196-7d0575eca41d" width="600" alt="대쉬보드이미지"><br>
<br>
상단에 팀 전체의 지표를 표시하고, 하단에는 DORA Metrics, Cycle Time by PullRequest, Project Delivery Tracker List를 배치하여 인터페이스를 섹션화하고 데이터를 구조화 하였습니다. 이렇게 구조화하여 핵심 정보와 세부 정보를 구분하여 사용자가 필요한 정보를 쉽게 찾을 수 있도록 하였습니다.
그리고 이미 많은 양의 정보를 제공하고 있어서 기준을 텍스트로 따로 전달하기보다 색으로 표현하여 사용자가 한눈에 상태를 파악할 수 있도록 기획했습니다.
<br>
<br>

# 📍 Develog의 화면 별 기능들

### 1. 로그인 화면

<img src="https://github.com/user-attachments/assets/10a31f36-c706-487f-aca7-b540b55839b6" width="600" alt="데이터베이스"><br>

- 로그인 화면에서 github Oauth로 로그인하게 되면 사용자 계정의 레포지토리 데이터를 가지고와서 셀렉트박스로 보여줍니다.
- 이미 DB에 저장되어있는 레포지토리는 셀렉트박스 아래에 텍스트로 나타내어 사용자에게 미리 알려줍니다.

### 2. Dashboard 화면

<img src="https://github.com/user-attachments/assets/d8bfccd7-5a0f-4fb5-bb44-9fee157694e1" width="600" alt="데이터베이스"><br>

- 페이지 상단의 TeamView를 통해 팀 프로젝트 전체의 상태를 볼 수 있습니다.
  - 날짜를 선택하여 날짜 범위의 데이터를 확인해 볼 수 있습니다.
  - 총 깃 커밋수, 개발 주기시간, 프로젝트 참여자, 프로젝트 주요작업을 확인해 볼 수 있습니다.
  - 개발 주기시간 각 항목 타이틀 옆 동그라미 색으로 각 항목의 상태를 확인해 볼 수 있습니다.
- 페이지 하단의 DORA Metrics를 통해 개발 성과 지표를 그래프로 시각화하였습니다.
  - 레포지토리 셀렉트박스를 통해 레포지토리별 DORA Metrics를 확인해 볼 수 있습니다.
  - 그래프의 색으로 현재 개발 상태를 시각화하여 한눈에 확인해 볼 수 있습니다.

### 3. CycleTime 화면

<img src="https://github.com/user-attachments/assets/27ab5b34-8a6a-4be8-a683-a3f55e22b7bd" width="600" alt="데이터베이스"><br>

- 페이지 상단에서 팀의 총 개발 주기시간을 확인해 볼 수 있습니다.
  - 날짜를 선택하여 해당 날짜 범위의 개발 주기시간과 리스트를 보여줍니다.
- 하단 리스트를 통해 프로젝트들의 PullRequest 별 개발 주기시간을 확인해 볼 수 있습니다.
  - 리스트에서 PullRequest명, 작성자, 레포지토리명, 개발 주기시간 요소, 커밋수, PR Size를 확인해 볼 수 있습니다.
  - 개발 주기시간 요소별로 동그라미 색으로 상태를 확인해 볼 수 있습니다.

### 4. Project Delievery 화면

<img src="https://github.com/user-attachments/assets/33300b24-64b2-4c29-af46-5d7b8a634db0" width="600" alt="데이터베이스"><br>

- 페이지 상단에서 팀의 총 프로젝트 수, 프로젝트 참여자 수, 프로젝트 주요작업을 라벨별로 보여줍니다.
- Project Delivery Tracker List에서 각 프로젝트 별로 프로젝트명, 프로젝트 활동 인원 수, 프로젝트 주요 작업, 프로젝트 달성율을 보여줍니다.
  - Project Delivery Tracker List 클릭 시 해당 프로젝트의 상세 페이지로 전환됩니다.
- Project Delivery Tracker List 상세페이지에서는 깃허브 프로젝트 기준으로 진행날짜와 스프린트별 날짜를 보여줍니다.
  - 활동 인원비율을 전체 프로젝트 활동 인원기준으로 보여줍니다. 가장 많이 활동하는 팀원을 보여줍니다. 스프린트별 활동 인원비율을 보여줍니다.
  - 프로젝트 주요 작업을 이슈의 라벨 데이터로 집계하여 보여줍니다.
  - 프로젝트 달성율을 이슈의 closed 날짜로 집계하여 보여줍니다.
  - 계획정확도를 프로젝트 시작 전의 생성된 이슈로 집계하여 보여줍니다.

# 📝 프로젝트를 진행하며 고민했던 점

## 1. 깃허브 API를 통해 데이터를 바로 사용할 수 있음에도 불구하고, 데이터베이스를 사용하는 것이 더 나은 이유가 뭘까?

개발을 시작하면서 깃허브 API을 통해 데이터를 바로 사용할 수 있는데 굳이 데이터베이스가 필요할까? 라는 생각이 들었습니다.
우선 깃허브 API에는 요청당 제한이 있습니다. 무분별한 API 호출은 제한에 걸려 데이터를 가져오지 못할 수 있는 위험이 있고 매번 실시간으로 API를 호출하면 응답 시간이 길어질 수 있지만 데이터베이스를 사용하면 로컬저장소에서 데이터를 가져오기 때문에 훨씬 빠른 응답이 가능하여 이러한 문제점을 해결할 수 있다는 생각에 데이터베이스를 사용하기로 결정하였습니다.

## 2. 깃허브 데이터를 불러올 때 클라이언트사이드에서 처리하는게 좋을까? 서버사이드에서 처리하는게 좋을까?

두번째 의문점은 데이터를 어디서 처리하는게 좋을까하는 의문점이였습니다.<br>
GitHub API를 호출할 때 인증 토큰을 사용해야하는데 이 토큰을 클라이언트 사이드에서 노출하는 것은 보안상 위험하다고 판단하였습니다. 그래서 서버 사이드에서 데이터를 처리해서 넘기게되면 안전하게 API 키를 관리 할 수 있다 판단하여 서버사이드에서 데이터 처리하였습니다.
그리고 서버 사이드에서 API 데이터를 불러오고, 필요한 데이터를 가공한 후 클라이언트로 전송하여 네트워크 트래픽을 줄일 수 있었습니다. 클라이언트 사이드에서 직접 API를 호출하면, 많은 데이터가 클라이언트로 전송되어 성능 저하를 초래할 수 있어 서버사이드에서 데이터 처리하였습니다.

## 3. 중첩되고 복잡한 로그 데이터를 어떻게 처리해야 할까?

Develog 프로젝트를 통해 처음으로 실제 데이터베이스 설계와 구현을 경험하게 되었습니다. 이 과정에서 체계적인 접근이 중요하다고 판단하여, 데이터베이스 설계의 표준적인 방법론을 따라 4단계로 나누어 진행했습니다. 이러한 단계별 접근을 통해 프로젝트의 요구사항을 충족시키면서도 확장 가능하고 유지보수가 용이한 데이터베이스 구조를 설계하고자 노력했습니다.

### 3-1. 요구 사항 분석

- 사용자와의 커뮤니케이션: GitHub 기반의 프로젝트 관리 시스템에 대한 니즈를 확인
- 시스템 목표 정의: GitHub 저장소와 연동하여 프로젝트 및 스프린트 성과 추적, 팀원들의 활동 및 성과 추적 가능, 버그 해결 시간 모니터링, PR 처리 효율성 분석
- 요구 사항 정리 및 검토: 필요한 데이터 항목 리스트 작성 (프로젝트, 스프린트, 이슈, PR 등), 각 데이터 항목별 필요한 세부 정보 정의

### 3-2. 개념적 설계

- ER 다이어그램 작성

<img src="https://github.com/user-attachments/assets/64e539e2-fe5d-48a5-9368-b7bf80a552b0" width="600" alt="데이터베이스"><br><br>

- 엔티티 및 속성 식별

  - Users: 사용자 정보 관리
  - Repositories: GitHub 저장소 정보
  - Sprints: 스프린트 정보
  - Issues: 이슈 정보
  - PullRequests: 풀 리퀘스트 정보
  - SprintStats: 스프린트 통계
  - DailyStats: 일일 통계

- 관계 설정

  - Users - Repositories: 다대다 관계
  - Repositories - Sprints: 일대다 관계
  - Sprints - Issues: 일대다 관계
  - Repositories - PullRequests: 일대다 관계
  - Sprints - SprintStats: 일대일 관계
  - Repositories - DailyStats: 일대다 관계

- 데이터 무결성 검사
  - 기본 키 설정: 각 엔티티의 id를 기본 키로 설정

### 3-3. 논리적 설계

<img src="https://github.com/user-attachments/assets/b49f83b5-da7c-4dad-94a4-d8fceb76cc72" width="600" alt="데이터베이스"><br><br>

### 3-4. 물리적 설계

- 데이터 저장 구조: MongoDB의 문서 기반 저장 구조 활용(BSON(Binary JSON) 형식으로 데이터를 저장)

## 4. webhook을 이용한 데이터의 최신화

Develog는 회원가입 시 팀의 깃허브에서 데이터를 받아서 차트와 리스트에 반영시킵니다.
하지만 이후 변경되는 데이터도 Develog에 실시간으로 반영시켜주고 싶었습니다. 제가 처음에 생각한 방법은 배치 처리 방식이였습니다.
단순하게 주기적으로 데이터를 받아오면 사용자에게 최신 데이터를 제공해 줄 수 있을 것이라 생각했습니다. 하지만 API 제한이 있는 Github 시스템과 맞지 않는다는 생각을 하였고 변경 사항이 빈번하지 않은 프로젝트에서 주기적으로 전체 데이터를 폴링하는 것은 비효율적이라 판단되었습니다. 그래서 변경이 있을 때만 처리하여, 불필요한 API 호출을 줄일 수 있는 webhook이 develop에 더 적합하다 판단이 되었습니다.

![webhook](https://github.com/user-attachments/assets/9beee32b-d49e-42f7-a9c4-9b5ef0f45c20)

> <b>웹훅이란</b> 데이터가 변경되었을 때 실시간으로 알림을 받을 수 있는 기능입니다. 웹 서비스의 이벤트 데이터를 전달하는 HTTP 기반 콜백 함수입니다.

webhook 요청의 진위를 확인하는 것이 중요합니다. secret token을 사용해 요청의 HMAC-SHA256 서명을 검증하여 진위를 확인하여 보안성을 높였습니다.
또한 네트워크 문제 등으로 webhook 처리에 실패할 경우를 대비한 재시도 메커니즘이 구현하여 사용자에게 최신 데이터를 전달할 수 있도록 개선하였습니다.

## 5. 초기 데이터 저장 시간을 어떻게 개선할 것인가?

- 추후 리팩토링 후 작성 예정입니다.

# 📍 Schedules

- 1주차
  - 아이디어 선정
  - 기술 스택 결정 및 검증
  - 기획 및 칸반 작업
  - <a href="https://www.figma.com/design/rkktZfaO7QhfCLr8TmDG2j/Develog?node-id=0-1&t=KRCxJu0D45xJwZ3c-1">와이어프레임 작성</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8?pane=issue&itemId=70827543">개발환경 세팅</a>
- 2주차
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70828099">로그인, 회원가입화면 구현</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70828460">Dashboard, CycleTime 정적화면 구현</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70828817">ProjectDeliveryTracker 및 프로젝트 상세 정적화면 구현</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70829984">로그인 및 회원가입 페이지 사용자 인증 및 권한 기능 구현</a>
- 3주차
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70830953">Dashboard 데이터 가져오기 기능 및 차트 구현</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70831749">CycleTime 데이터 가져오기 기능 및 리스트에 값 동적으로 할당</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70832759">Project Delivery Tracker List 데이터 가져오기 기능 및 리스트에 값 동적으로 할당</a>
  - <a href="https://github.com/orgs/Develog-Tools-for-team-productivity/projects/8/views/1?pane=issue&itemId=70833026">ProjectDeliveryTracker 상세페이지 데이터 가져오기 기능 및 값 동적으로 할당</a>

# 📍 회고

이번 프로젝트를 진행하면서 기획부터 디자인, 개발까지 진행해보았는데 사용자 경험(UX) 디자인의 중요성도 새삼 깨달았습니다. 복잡한 데이터를 어떻게 하면 사용자가 쉽게 이해하고 활용할 수 있을지 고민하며, UI/UX 설계 능력도 한층 발전시킬 수 있었습니다.
이러한 프론트엔드 개발 경험을 통해, 단순히 기능 구현에 그치지 않고 사용자 중심의 인터페이스를 설계하고 구현하는 능력을 키울 수 있었습니다.<br><br>
그리고 처음으로 MongoDB와 백엔드 개발에 도전해보았습니다. 시작할 때는 생소한 영역이라 걱정이 많았지만, 하나씩 해결해 나가면서 새로운 기술을 습득하는 즐거움을 느꼈습니다.
MongoDB의 유연한 스키마 구조와 강력한 쿼리 기능을 익히면서, 데이터베이스에 대한 새로운 시각을 갖게 되었습니다. 백엔드 개발을 통해 서버 사이드 로직의 중요성과 API 설계의 핵심을 이해할 수 있었고, 프론트엔드와의 원활한 통신 방법도 배웠습니다.<br><br>
이 경험을 통해 가장 큰 수확은 새로운 기술에 대한 자신감입니다. 앞으로 업무에서 낯선 기술을 마주하더라도, 이번처럼 차근차근 학습하고 적용할 수 있다는 믿음이 생겼습니다.
