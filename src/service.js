const COMPANY_NAME = 'YoungCapital';

export const fetchCompany = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          company: {
            name: COMPANY_NAME
          }
        }
      });
    }, 1000);
  });
};
