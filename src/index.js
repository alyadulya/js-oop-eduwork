class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `<tr>`
        d.forEach((i) => {
          open += `
              <td>${i}</td>
          `;
        });
        open += `</tr>`
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover table-striped'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["Name", "Email", "Country", "Job"],
    data: [
      ["Edi Hartono", "edi.eduwork@gmail.com", "Indonesia", "Programmer"],
      ["Dodi Prakoso", "dodi@upscale.id", "Indonesia", "CEO"],
      ["Alyad Ulya Iman", "alyadulya@gmail.com", "Wakanda", "Watcher"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);
  