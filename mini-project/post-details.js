// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/{POST_ID}/comments)
let url = new URL(location.href);
let id = url.searchParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {

            let mainBlock = document.createElement('div');
            mainBlock.classList.add('mainBlock');
            document.body.appendChild(mainBlock);

            let header = document.createElement('div');
            header.classList.add('header');
            mainBlock.appendChild(header);

            let smallDiv2 = document.createElement('div');
            smallDiv2.classList.add('smallDiv2');
            header.appendChild(smallDiv2);

            for (const element in data) {
                let info = document.createElement('div');
                info.classList.add('info')
                smallDiv2.appendChild(info);

                info.append(`${element}: - ${data[element]}`)
            }


            let btnDiv3 = document.createElement('div');
            btnDiv3.classList.add('btnDiv3');
            header.appendChild(btnDiv3);

            let btn = document.createElement('button');
            btn.innerText = 'show all comments';
            btnDiv3.appendChild(btn);

            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                            let commentsDiv = document.createElement('div');
                            commentsDiv.classList.add('commentsDiv')
                            header.appendChild(commentsDiv);
                            let count = 0;
                            for (const comment of comments) {
                                count += 1;
                                let commentDiv = document.createElement('div');
                                commentDiv.classList.add('commentDiv');
                                commentsDiv.appendChild(commentDiv);
                                commentDiv.append(`${count}.  "${comment.body}"`);
                            }

                        }
                    );

                btn.disabled = true;
            };
        }
    );