


        let tab2Body = document.getElementById('tab-body-2');
        tab2Body.style.display = 'none';

        let tab3Body = document.getElementById('tab-body-3');
        tab3Body.style.display = 'none';


        let tab1button = document.getElementById('tab-button-1')
        tab1button.style.borderBottom = '2PX solid black;'


        function tab1HeadingClick() {
            //show tab1 /// hide tab2 and tab3
            let tab1Body = document.getElementById('tab-body-1');
            tab1Body.style.display = 'block';

            let tab2Body = document.getElementById('tab-body-2');
            tab2Body.style.display = 'none';

            let tab3Body = document.getElementById('tab-body-3');
            tab3Body.style.display = 'none';


            
            let tab1button = document.getElementById('tab-button-1')
            let tab2button = document.getElementById('tab-button-2')
            let tab3button = document.getElementById('tab-button-3')

            tab1button.style.borderBottom = '2px solid black'
            tab2button.style.borderBottom = '0'
            tab3button.style.borderBottom = '0'

        }
        function tab2HeadingClick() {
            //show tab2 /// hide tab1 and tab3
            let tab1Body = document.getElementById('tab-body-1');
            tab1Body.style.display = 'none';

            let tab2Body = document.getElementById('tab-body-2');
            tab2Body.style.display = 'block';

            let tab3Body = document.getElementById('tab-body-3');
            tab3Body.style.display = 'none';


            
            let tab1button = document.getElementById('tab-button-1')
            let tab2button = document.getElementById('tab-button-2')
            let tab3button = document.getElementById('tab-button-3')

            tab1button.style.borderBottom = '0'
            tab2button.style.borderBottom = '2px solid black'
            tab3button.style.borderBottom = '0'

        }
        function tab3HeadingClick() {
            //show tab3 /// hide tab1 and tab2
            let tab1Body = document.getElementById('tab-body-1');
            tab1Body.style.display = 'none';

            let tab2Body = document.getElementById('tab-body-2');
            tab2Body.style.display = 'none';

            let tab3Body = document.getElementById('tab-body-3');
            tab3Body.style.display = 'block';


            let tab1button = document.getElementById('tab-button-1')
            let tab2button = document.getElementById('tab-button-2')
            let tab3button = document.getElementById('tab-button-3')

            tab1button.style.borderBottom = '0'
            tab2button.style.borderBottom = '0'
            tab3button.style.borderBottom = '2px solid black'

        }