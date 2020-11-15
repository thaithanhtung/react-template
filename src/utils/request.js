import axios from 'axios';
import Promise from 'promise';
// import toast from 'components/Toast';

export const makeRequest = async ({
  url = '',
  method = 'get',
  data,
  headers = {},
  params,
  dispatch,
  type = {},
  hidenMessageErr,
  ...props
}) => {
  // set loading
  // if (dispatch) {
  //   dispatch({ type: type.PENDING });
  // }
  return Promise.all([])
    .then(() =>
      axios({
        url,
        method,
        data,
        params,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          ...headers,
        },
        credentials: 'same-origin',
        ...props,
      })
    )
    .catch((err) => {
      console.log('err.response', err.response);
      // if (!hidenMessageErr) {
      //   handleMessageError(err.response);
      // }
      // const { response } = err;
      // if (response && response.status === 403) {
      //   window.localStorage.clear();
      //   window.location.href = '/#/login';
      // }
      // trackingError(err.response);
      // throw err;
    })
    .finally(() => {
      // do to when call api finish
      // if (dispatch) {
      //   dispatch({ type: type.UNPENDING });
      // }
    });
};

export const makeRequestDownload = ({
  defaultFileName = 'fileDownload',
  ...props
}) =>
  makeRequest({
    ...props,
    responseType: 'blob',
    headers: {
      Accept: '*/*',
    },
  }).then((res) => {
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    let fileName = defaultFileName;
    if (res.headers && res.headers['content-disposition']) {
      const contentDisposition = res.headers['content-disposition'];
      const indexFileName = contentDisposition.indexOf('filename=');
      if (indexFileName >= 0) {
        fileName = contentDisposition.substring(
          indexFileName,
          contentDisposition.length
        );
        fileName = fileName.replace('filename=', '');
      }
    }
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    return res;
  });
