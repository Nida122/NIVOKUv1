// js/ust-all.js
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("ust-list");
    const pager = document.getElementById("pagination");
    if (!list || !pager || typeof ustData === "undefined") return;

    const PER_PAGE = 10;
    let currentPage = 1;

    // 新しい順にソート
    const sorted = [...ustData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    const totalPages = Math.ceil(sorted.length / PER_PAGE);

    function render(page) {
        list.innerHTML = "";
        pager.innerHTML = "";

        const start = (page - 1) * PER_PAGE;
        const end = start + PER_PAGE;
        const items = sorted.slice(start, end);

        /* ---------- UST描画 ---------- */
        items.forEach(item => {
            const row = document.createElement("div");
            row.className = "ust-row";

            row.innerHTML = `
            <div class="ust-info">
                <div class="ust-title">${item.title}</div>
                <div class="ust-meta">
                        ${item.original} / ${item.date}
                </div>
            </div>
            <div class="ust-links">
                <a class="btn btn-outline" href="${item.ust}" target="_blank">UST DL</a>
                <a class="btn btn-outline" href="${item.youtube_cover}" target="_blank">カバー</a>
                <a class="btn btn-outline" href="${item.youtube_original}" target="_blank">原曲</a>
            </div>
        `;
            list.appendChild(row);
        });

        /* ---------- ページャ ---------- */

        // 最初
        const firstBtn = document.createElement("button");
        firstBtn.textContent = "最初";
        firstBtn.className = "page-btn";
        firstBtn.disabled = page === 1;
        firstBtn.addEventListener("click", () => {
            currentPage = 1;
            render(currentPage);
        });
        pager.appendChild(firstBtn);

        // ページ番号
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = "page-btn";

            if (i === page) {
                btn.disabled = true;
                btn.classList.add("is-active");
            }

            btn.addEventListener("click", () => {
                currentPage = i;
                render(currentPage);
            });

            pager.appendChild(btn);
        }

        // 最後
        const lastBtn = document.createElement("button");
        lastBtn.textContent = "最後";
        lastBtn.className = "page-btn";
        lastBtn.disabled = page === totalPages;
        lastBtn.addEventListener("click", () => {
            currentPage = totalPages;
            render(currentPage);
        });
        pager.appendChild(lastBtn);
    }

    render(currentPage);
});
