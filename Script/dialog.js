class Dialog {

    constructor(title = '标题', content = '第一天') {
        this.title = title;
        this.content = content;
        this.init();
    }
    init() {
        this.createWrap();
    }
    addEvent() {
        let span = document.querySelectorAll('.right')[0];
        let success = document.querySelectorAll('.success')[0];
        let failed = document.querySelectorAll('.failed')[0];

        span.addEventListener('click', (event) => {
            let oBox = document.querySelectorAll('.box')[0];
            console.log(oBox)
            oBox.style.display = 'block';
        })
        success.addEventListener('click', (event) => {
            this.hide();
        })
        failed.addEventListener('click', (event) => {
            this.show()
        })

    }
    show() {
        let oBox = document.querySelectorAll('.box')[0];
        oBox.style.display = 'none';
    }
    hide() {
        let oDiv = document.querySelectorAll('.dialog')[0];

        oDiv.style.display = 'none';
    }
    createButton(txt, cls) {
        let btn = document.createElement('button');
        btn.innerHTML = txt;
        btn.className = cls;
        return btn;

    }
    createTittle() {
        let ol = document.createElement('ol');
        let span = document.createElement('span');

        ol.className = 'title';
        ol.innerHTML = this.title;
        span.className = 'right';
        span.innerHTML = 'X';
        ol.append(span);
        return ol;
    }
    createContent() {
        let ul = document.createElement('ul');
        let p = document.createElement('p');
        let oBox = document.createElement('b');
        let btnSuccess = this.createButton('ok', 'success');
        let btnFailed = this.createButton('cancle', 'failed');

        ul.className = 'content';
        oBox.className = 'box';
        ul.innerHTML = this.content;

        ul.append(oBox)
        oBox.append(p)
        p.append(btnSuccess);
        p.append(btnFailed);
        return ul;
    }
    createWrap() {
        let oDiv = document.createElement('div');
        let oTit = this.createTittle();
        let oCon = this.createContent();

        oDiv.append(oTit);
        oDiv.append(oCon);
        oDiv.className = 'dialog'

        document.body.append(oDiv);
        this.addEvent();
    }
}

let dialog = new Dialog();