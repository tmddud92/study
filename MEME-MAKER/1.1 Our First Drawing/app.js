// JS에서 canvas를 사용해 브라우저에 2D 혹은 3D 그래픽을 그릴 수 있다.
// html에서는 canvas 한 번 써주는 게 전부이고,
// 나머지 작업은 대부분 js에서 이루어진다.

// 1. JS에서 canvas 불러오기
// - const canvas = document.querySelector("canvas");

// 2. contehttps://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2Dxt 작성
// - context는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// - canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)

// 3. 캔버스 크기 설정
// - css에서 캔버스 크기 설정을 한 후 js에서도 작성해준다.
// - 이후에는 width 와 height를 js에서만 수정할 것임 (css에서 X)

// 4. 캔버스 위에 사각형 그리기
// - canvas 좌표 시스템:
// 캔버스 좌상단이 좌표 0.0, 가로 X, 세로 Y
// - 사각형 채우는 함수 fillRect 작성
// -> ctx.fillRect(x값, y값, w값, h값);

// getContext()
// getContext() 메서드는 canvas 요소에 대한 렌더링 컨텍스트 및 관련 그리기 기능을 얻는 데 사용됩니다.
// getContext() 메서드에 생성할 컨텍스트 유형을 지정할 수 있으며 가장 일반적으로 사용되는 컨텍스트 유형은 2D 렌더링의 경우 "2d"입니다.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

// CanvasRenderingContext2D.fillRect()
// 크기가 너비와 높이로 결정되는 (x, y) 위치에 채워진 사각형을 그립니다.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D