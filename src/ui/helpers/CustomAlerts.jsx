import Swal from "sweetalert2";

export const CustomLoadingAlert = async ({
  title = "Cargando...",
  subtitle = "Aguarde un momento por favor",
  titleError = "¡Ups! ocurrió un error",
  isError = false,
  subtitleError = "Error",
}) => {
  if (isError === false) {
    Swal.fire({
      title: title,
      html: subtitle,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else {
    Swal.fire({
      icon: "error",
      title: titleError,
      text: subtitleError,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export const CustomCloseAlert = () => Swal.close();
// export const CustomLoadingAlert = async ({
//   title = "Guardando...",
//   subtitle = "Aguarde un momento por favor",
//   titleSuccess = "¡Datos guardado exitosamente!",
//   titleError = "¡Ups! ocurrió un error",
//   handleValue = async () => {},
// }) => {
//   let response;
//   Swal.fire({
//     title: title,
//     html: subtitle,
//     timerProgressBar: true,
//     allowOutsideClick: false,
//     didOpen: async () => {
//       Swal.showLoading();
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       response = await handleValue();
//       Swal.close();
//     },
//   }).then(async () => {
//     console.log(response);
//     // Swal.close();
//     // try {
//     //   Swal.close();
//     //   Swal.fire({
//     //     title: titleSuccess,
//     //   });
//     //   return response.data;
//     // } catch (error) {
//     //   const errorMessage = Object.entries(error.response.data)
//     //     .map(([key, value]) => {
//     //       const listText = value.join(", ");
//     //       return `${listText}`;
//     //     })
//     //     .join("\n");
//     //   Swal.close();
//     //   Swal.fire({
//     //     icon: "error",
//     //     title: titleError,
//     //     text: `${errorMessage}`,
//     //   });
//     //   return error;
//     // }
//   });
//   // .catch((response) => {
//   //   console.log("catch response");
//   // });

//   //   await new Promise((resolve) => setTimeout(resolve, 1000));
// };
