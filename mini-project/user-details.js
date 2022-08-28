// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
            let mainDiv = document.createElement('div')
            mainDiv.classList.add('wrapper');
            document.body.appendChild(mainDiv);

            let infoDiv = document.createElement('div');
            infoDiv.classList.add('user-info');
            mainDiv.appendChild(infoDiv);

            let div1 = document.createElement('div');
            infoDiv.appendChild(div1)



             infoDiv.innerHTML = `     <h2>${user.id} - ${user.name}</h2>
                                 <h3>Username: ${user.username}</h3>
                                 <h3>Email: ${user.email}</h3>
                                 <ul><h3>Address:</h3>
                                 <li>Street: ${user.address.street}</li>
                                 <li>Suite: ${user.address.suite}</li>
                                 <li>City: ${user.address.city}</li>
                                 <li>Zipcode: ${user.address.city}</li>
                                 <ul><h3>Geo:</h3>
                                 <li>lat: ${user.address.geo.lat}</li>
                                 <li>lng: ${user.address.geo.lng}</li>
                                </ul>
                                </ul>
                                  <h3>Phone: ${user.phone}</h3>
                                  <h3>Website: ${user.website}</h3>
                                  <ul><h3>Company</h3>
                                  <li>Name: ${user.company.name}</li>
                                  <li>Catch phrase: ${user.company.catchPhrase}</li>
                                 <li>Bs: ${user.company.bs}</li>
                                  </ul>`
        // function explorer(element) {
        //     for (const key in element) {
        //         if (typeof element[key] !== 'object') {
        //             let microDiv = document.createElement('div');
        //             microDiv.classList.add('microDiv');
        //
        //             let p = document.createElement('p');
        //             p.append(`${key}:  ${element[key]}`);
        //             microDiv.appendChild(p);
        //
        //             infoDiv.appendChild(microDiv);
        //
        //         } else {
        //
        //             explorer(element[key]);
        //
        //         }
        //
        //     }
        // }
        // explorer(user);

            let btn = document.createElement('button');
            btn.innerText = 'post of current user';
            // infoDiv.appendChild(btn);

            let btnDiv = document.createElement('div');
            btnDiv.classList.add('btnDiv')
            btnDiv.appendChild(btn)
            mainDiv.appendChild(btnDiv)


            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {

                            let wrap2 = document.createElement('div');
                            document.body.appendChild(wrap2);
                            wrap2.classList.add('wrap2');

                            for (const post of posts) {

                                let postDiv = document.createElement('div');
                                postDiv.classList.add('postDiv')
                                // postDiv.innerText = `${post.title}`;
                                wrap2.appendChild(postDiv)

                                let smallDiv = document.createElement('div');
                                smallDiv.innerText = `${post.title}`
                                smallDiv.classList.add('smallDiv');
                                postDiv.appendChild(smallDiv);

                                let postDetails = document.createElement('button');
                                postDetails.innerText = 'details about post';

                                let btnDiv = document.createElement('div');
                                btnDiv.classList.add('btnDiv2');
                                btnDiv.appendChild(postDetails)
                                postDiv.appendChild(btnDiv)

                                postDetails.onclick = function () {

                                    location.href = `post-details.html?id=${post.id}`

                                };
                            }
                        }
                    );
                btn.disabled = true;
            };
        }
    );



