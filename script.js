// function abreRequsicaoAPI() {
//   $(document).ready(function () {
//     //Comandos
//     $.ajax({
//       url:
//         "https://api.nasa.gov/planetary/apod?api_key=vNu1D1M9Q4QP1AQBt97BlDepYCLBZaKogNXt0HDu",

//       api_key: "vNu1D1M9Q4QP1AQBt97BlDepYCLBZaKogNXt0HDu",
//       success: function (result) {
//         //Funções de DOM serão adicionadas aqui
//         var data = $("#data").val();
//         result.date = data;
//         console.log(result);
//         dataSelecionada.html(data);
//         titulo.html(result.title);
//         descricao.html(result.explanation);
//         imagem.attr("src", result.url);
//       },
//     });
//   });
// }

// //Declaração de variáveis
// var btn = $("#enviar");

// var dataSelecionada = $("#dataEscolhida");
// var titulo = $(".titulo");
// var descricao = $(".descricao");
// var imagem = $("img");
// //

// //Eventos
// btn.on("click", () => {
//   abreRequsicaoAPI();
//   console.log("btn ok");
// });
function recebeData() {
  return $("#data").val();
}
$("#enviar").on("click", () => {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    data: {
      date: recebeData(),
    },
    success: function (result) {
      console.log(result);
      $("#dataEscolhida").html(result.date);
      $(".titulo").html(result.title);
      $(".descricao").html(result.explanation);
      if (result.media_type === "image") {
        $("#video").css("display", "none");
        $("#img").attr("src", result.hdurl);
        $("#img").css("display", "block");
      } else {
        $("#img").css("display", "none");
        $("#video").attr("src", result.url);
        $("#video").css("display", "block");
      }
    },
  });
});
