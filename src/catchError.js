import CustomError from 'CustomError';

function catchError(target, name, descriptor) {
  const original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = async function (...args) {
      try {
        const result = await original.apply(this, args);

        return result;
      } catch (error) {
        const httpCode = error.status || 500;
        const message = error.response.text;

        throw new CustomError({ httpCode, message });
      }
    };
  }

  return descriptor;
}

export default catchError;
