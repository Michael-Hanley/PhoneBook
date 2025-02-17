export const escape = {
  created() {
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        this.escapeHandler();
      }
    }

    document.addEventListener('keydown', escapeHandler);

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  }
}