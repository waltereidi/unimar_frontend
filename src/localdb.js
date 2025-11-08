import localforage from 'localforage';

localforage.config({
  name: 'MyVueAppDB',
  storeName: 'local_data',
});

export default localforage;
