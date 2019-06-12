
import Swal from 'sweetalert2';

// type can be warning, error, success, info, or question

export const showAlert = (title = 'Title', text = 'Message', type = 'info', overrides = {}) => {
    Swal.fire({
        title: title,
        text: text,
        type: type,
        ...overrides
      });
}

export const confirmAlert = (title = 'Title', text = 'Message', callback = () => {}, type = 'warning', overrides = {}) => {
    Swal.fire({
        title: title,
        text: text,
        type: type,
        showCancelButton: true,
        ...overrides,
        // confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            callback();
        }
      })
}