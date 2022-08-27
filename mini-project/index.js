// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);


        let wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        container.appendChild(wrap);



        for (const user of users) {
            let div = document.createElement('div');
            wrap.appendChild(div);
            div.classList.add('user');

            let smallDiv = document.createElement('div');
            div.appendChild(smallDiv);
            smallDiv.classList.add('smallDiv');

            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} - ${user.name}`;
            smallDiv.appendChild(h2);

            let btnDiv = document.createElement('div');
            div.appendChild(btnDiv);
            btnDiv.classList.add('btnDiv');

            let btn = document.createElement('button');
            btn.onclick = function () {
                location.href=`user-details.html?id=${user.id}`
            };
            btn.innerText = 'Click me';
            btnDiv.appendChild(btn);





        }})