const boardsContainter = document.querySelector(".boards-container");

fetch("https://tech-club-api.onrender.com/honour-roll-data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((board_data) => {
            const board = document.createElement("div");
            board.classList.add("board");

            board.innerHTML = `
                <h2 class="year">${board_data.year}</h2>
                <br>
                <div class="people">
                    ${board_data.people
                        .map((person) => {
                            return `
                            <div class="person-info">
                                <div class="name">${person.name}, ${person.class}</div>
                                <br>
                                <div class="title"
                                >${person.title}</div>
                            </div>

                            `;
                        })
                        .join("")}
                </div>
                `;
            boardsContainter.appendChild(board);
        });
    });
