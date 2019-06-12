
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