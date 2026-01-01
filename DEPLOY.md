# GitHub Pages 배포 가이드

## 1. GitHub에 푸시하기

터미널에서 다음 명령어를 실행하세요:

```bash
git push -u origin main
```

만약 인증 문제가 발생하면:
- GitHub Personal Access Token을 사용하거나
- SSH 키를 설정하여 사용하세요

## 2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동: https://github.com/aehwa/happy2026
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 버튼 클릭

## 3. 배포 확인

몇 분 후 다음 주소에서 웹페이지를 확인할 수 있습니다:
- https://aehwa.github.io/happy2026/

## 참고사항

- GitHub Pages는 무료로 제공됩니다
- 배포 후 변경사항이 반영되기까지 몇 분이 걸릴 수 있습니다
- 커밋 후 자동으로 배포가 업데이트됩니다

