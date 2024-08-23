$(document).ready(function() {
    // ページが初めて開かれたかどうかを確認
    const isFirstVisit = localStorage.getItem('firstVisit');

    if (!isFirstVisit) {
         //初回アクセス時はローディング画面を表示し、localStorageにフラグをセット
        $('#splash').show();
        $('#content').hide();
        localStorage.setItem('firstVisit', 'false');

        // プログレスバーの設定とアニメーション
        var bar = new ProgressBar.Line('#progress_bar', {
            easing: 'easeInOut',
            duration: 20000,
            strokeWidth: 0.2,
            color: '#03e9f4',
            trailWidth: 0.2,
            trailColor: '#bbb',
            text: {
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: '0',
                    margin: '-30px 0 0 0',
                    transform: 'translate(-50%, -50%)',
                    'font-size': '1rem',
                    color: '#fff',
                },
                autoStyleContainer: false
            },
            step: function(state, bar) {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
		

        // プログレスバーが完了した後のアクション
        bar.animate(1.0, function() {
            $("#splash_text").fadeOut(10);
            $(".loader_cover-up").addClass("coveranime");
            $(".loader_cover-down").addClass("coveranime");
            $("#splash").fadeOut(1000, function() {
                $('#content').show();
            });
        });
    } else {
         //2回目以降はローディング画面を表示せずにコンテンツを表示
        $('#splash').hide();
        $('#content').show();
    }
});
