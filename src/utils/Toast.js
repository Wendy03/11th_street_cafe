import Swal from 'sweetalert2';

export default Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 1200,
  padding: '1em',
  position: 'top',
});
