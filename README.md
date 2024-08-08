![title](https://github.com/user-attachments/assets/849a342b-8696-40cb-b1ce-db2d620381e1)

![dora](https://github.com/user-attachments/assets/4519ca9a-2d75-43ad-8132-612dd3d1263a)

<b>Develog는 깃허브 기반 개발팀 생산성 향상 도구입니다.</b><br> 개발 과정의 비효율성을 데이터 분석으로 식별하고 개선하여 팀의 생산성과 프로젝트 관리 효율성을 높이기 위해 만들었습니다.

# 📍 Links
<a href="https://main--develog-tools.netlify.app/login">Deployed website</a> | <a href="https://github.com/Develog-Tools-for-team-productivity">Web Repository</a>
<br>

# 🛠️ Tech Stack

### Environment
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=ffffff"/> <img src="https://img.shields.io/badge/github-1677FF?style=for-the-badge&logo=github&logoColor=ffffff"/>

### Client
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/react-0088cc?style=for-the-badge&logo=react&logoColor=white"/> 
<img src="https://img.shields.io/badge/jotai-005571?style=for-the-badge&logo=jotai&logoColor=ffffff"/> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff"/> 

### Server
<img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/express-9999FF?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>

### Deployment
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify-&logoColor=black"/> <img src="https://img.shields.io/badge/render-FF4747?style=for-the-badge&logo=render-&logoColor=white"/>

### Test
<img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest-&logoColor=white"/> <img src="https://img.shields.io/badge/supertest-38A1CE?style=for-the-badge&logo=supertest-&logoColor=white"/>

# 📍 Index
- [Motivation](#motivation)
- DORA Metrics란?
- [Features](#features)
- [Challenges](#challenges)
- [Scheduls](#scheduls)
- [회고](#회고)

# 📍 Motivation
문득 매일 아침 교통 체증에 갇혀 있는 저를 발견했습니다. 이 시간에 얼마나 많은 일을 할 수 있을까 생각하며, 개발팀도 이런 '체증'에 빠져있진 않을까 고민하게 되었고
교통 정보 앱으로 최적의 경로를 찾아 시간을 절약하는 것처럼, 저희의 개발 과정도 이런 도구가 있으면 좋겠다는 생각이 들었습니다.
때로는 어디서 시간을 허비하는지, 어떤 작업이 발목을 잡는지 알기 어려웠거든요. 그래서 '개발 내비게이션'을 만들어보기로 했습니다. 이 도구로 팀의 잠재력을 최대한 끌어올리고, 모두가 더 효율적으로, 더 즐겁게 일할 수 있기를 바라며 이 프로젝트를 만들게 되었습니다.

# 📍 DORA Metrics란?
<img width="694" alt="스크린샷 2024-08-08 오후 3 21 39" src="https://github.com/user-attachments/assets/2868c836-8d8c-4256-9687-57cba03575cd"><br>
DORA (DevOps Research and Assessment) Metrics는 소프트웨어 개발 및 운영 팀의 성과를 측정하는 주요 지표입니다.<br>
Google Cloud의 DevOps Research and Assessment 팀이 개발한 메트릭스는 4가지 핵심 지표로 구성됩니다. <br>
- 배포 빈도 (Deployment Frequency): 개발팀이 프로덕션 또는 엔드유저에게 얼마나 자주 새로운 코드를 릴리스하는지를 측정합니다. 높은 배포 빈도는 팀이 작은 단위로 자주 변경사항을 전달할 수 있음을 의미하며, 이는 더 빠른 피드백과 위험 감소로 이어집니다.
- 변경 적용 소요 시간 (Lead Time for Changes): 코드 변경이 커밋된 시점부터 프로덕션에 성공적으로 배포되기까지 걸리는 시간입니다. 이 시간이 짧을수록 팀이 새로운 기능이나 수정사항을 빠르게 제공할 수 있음을 의미합니다.
- 변경 실패율 (Change Failure Rate): 프로덕션에 배포된 변경사항 중 실패로 이어지는 비율입니다. 여기서 실패는 즉각적인 수정, 롤백, 패치 등이 필요한 상황을 의미합니다. 낮은 변경 실패율은 팀의 코드 품질과 테스트 프로세스가 효과적임을 나타냅니다.
- 서비스 복구 시간 (Time to Restore Service): 서비스 중단이나 품질 저하가 발생했을 때, 정상 상태로 복구하는 데 걸리는 시간입니다. 이 시간이 짧을수록 팀이 문제에 빠르게 대응하고 해결할 수 있는 능력이 있음을 의미합니다.

높은 배포 빈도와 짧은 변경 적용 소요 시간은 팀의 민첩성을, 낮은 변경 실패율과 빠른 서비스 복구 시간은 팀의 안정성을 나타냅니다.<br>
<b>이 지표들을 통해 개발팀은 자신들의 소프트웨어 개발 및 운영 프로세스의 효율성과 안정성을 객관적으로 평가하고 개선할 수 있습니다.</b>
# 📍 Features
### 💡 로그인 화면
![Aug-08-2024 02-43-07](https://github.com/user-attachments/assets/6feac773-3277-493a-a01e-0a2e3fc4c781)

- 로그인 화면에서 github Oauth로 로그인하게 되면 사용자 계정의 레포지토리 데이터를 가지고와서 셀렉트박스로 보여줍니다.
- 이미 DB에 저장되어있는 레포지토리는 셀렉트박스 아래에 텍스트로 나타내어 사용자에게 미리 알려줍니다.
### 💡 Dashboard 화면
![Aug-08-2024 02-42-36](https://github.com/user-attachments/assets/6a548c49-d0e1-4f7f-9b6a-d25c2c545563)

- 페이지 상단의 TeamView를 통해 팀 프로젝트 전체의 상태를 볼 수 있습니다.
  - 날짜를 선택하여 날짜 범위의 데이터를 확인해 볼 수 있습니다.
  - 총 깃 커밋수, 개발 주기시간, 프로젝트 참여자, 프로젝트 주요작업을 확인해 볼 수 있습니다.
  - 개발 주기시간 각 항목 타이틀 옆 동그라미 색으로 각 항목의 상태를 확인해 볼 수 있습니다.
- 페이지 하단의 DORA Metrics를 통해 개발 성과 지표를 그래프로 시각화하였습니다.
  - 레포지토리 셀렉트박스를 통해 레포지토리별 DORA Metrics를 확인해 볼 수 있습니다.
  - 그래프의 색으로 현재 개발 상태를 시각화하여 한눈에 확인해 볼 수 있습니다. 

### 💡 CycleTime 화면
![Aug-08-2024 02-49-43](https://github.com/user-attachments/assets/fe6cc0f5-9211-45a2-a712-364f0c5c2e02)

- 페이지 상단에서 팀의 총 개발 주기시간을 확인해 볼 수 있습니다.
  - 날짜를 선택하여 해당 날짜 범위의 개발 주기시간과 리스트를 보여줍니다.  
- 하단 리스트를 통해 프로젝트들의 PullRequest 별 개발 주기시간을 확인해 볼 수 있습니다.
  - 리스트에서 PullRequest명, 작성자, 레포지토리명, 개발 주기시간 요소, 커밋수, PR Size를 확인해 볼 수 있습니다.
  - 개발 주기시간 요소별로 동그라미 색으로 상태를 확인해 볼 수 있습니다.

### 💡 Project Delievery 화면
![Aug-08-2024 02-43-38](https://github.com/user-attachments/assets/1b118e0f-e8d9-4ea1-bc73-c52048b39499)

- 페이지 상단에서 팀의 총 프로젝트 수, 프로젝트 참여자 수, 프로젝트 주요작업을 라벨별로 보여줍니다.
- Project Delivery Tracker List에서 각 프로젝트 별로 프로젝트명, 프로젝트 활동 인원 수, 프로젝트 주요 작업, 프로젝트 달성율을 보여줍니다.
  - Project Delivery Tracker List 클릭 시 해당 프로젝트의 상세 페이지로 전환됩니다.
- Project Delivery Tracker List 상세페이지에서는 깃허브 프로젝트 기준으로 진행날짜와 스프린트별 날짜를 보여줍니다.
  - 활동 인원비율을 전체 프로젝트 활동 인원기준으로 보여줍니다. 가장 많이 활동하는 팀원을 보여줍니다. 스프린트별 활동 인원비율을 보여줍니다.
  - 프로젝트 주요 작업을 이슈의 라벨 데이터로 집계하여 보여줍니다.
  - 프로젝트 달성율을 이슈의 closed 날짜로 집계하여 보여줍니다.
  - 계획정확도를 프로젝트 시작 전의 생성된 이슈로 집계하여 보여줍니다.

# 🔥 Challenges
### 1. 초기 데이터 저장 시간을 어떻게 개선할 것인가?
- 추후 리팩토링 후 작성 예정입니다.

### 2. 변동되는 데이터를 어떻게 업데이트 할 것인가?
- 추후 리팩토링 후 작성 예정입니다.

# 📍 Scheduls
- 1주차
  -  아이디어 선정
  -  기술 스택 결정 및 검증
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
이러한 프론트엔드 개발 경험을 통해, 단순히 기능 구현에 그치지 않고 사용자 중심의 인터페이스를 설계하고 구현하는 능력을 키울 수 있었습니다.
그리고 처음으로 MongoDB와 백엔드 개발에 도전해보았습니다. 시작할 때는 생소한 영역이라 걱정이 많았지만, 하나씩 해결해 나가면서 새로운 기술을 습득하는 즐거움을 느꼈습니다.
MongoDB의 유연한 스키마 구조와 강력한 쿼리 기능을 익히면서, 데이터베이스에 대한 새로운 시각을 갖게 되었습니다. 백엔드 개발을 통해 서버 사이드 로직의 중요성과 API 설계의 핵심을 이해할 수 있었고, 프론트엔드와의 원활한 통신 방법도 배웠습니다.
이 경험을 통해 가장 큰 수확은 새로운 기술에 대한 자신감입니다. 앞으로 업무에서 낯선 기술을 마주하더라도, 이번처럼 차근차근 학습하고 적용할 수 있다는 믿음이 생겼습니다.





