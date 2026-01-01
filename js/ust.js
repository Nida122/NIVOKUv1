// js/ust.js
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("ust-list");
    const count = document.getElementById("ust-count");
    if (!list || typeof ustData === "undefined") return;

    // 新しい順
    const sorted = [...ustData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    const total = sorted.length;
    const latest = sorted.slice(0, 4);

    // 件数表示
    if (count) {
        count.textContent = `全 ${total} 件中 最新 ${latest.length} 件を表示`;
    }

    latest.forEach(item => {
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
});
