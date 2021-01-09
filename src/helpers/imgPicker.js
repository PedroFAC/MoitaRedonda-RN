import ImageCropPicker from 'react-native-image-crop-picker';

export const pickFromGallery = (callback) => {
  ImageCropPicker.openPicker({
    width: 300,
    height: 300,
    cropping: true,
  }).then((image) => {
    callback(image.path);
  });
};

export const pickFromCamera = (callback) => {
  ImageCropPicker.openCamera({
    width: 300,
    height: 300,
    cropping: true,
  }).then((image) => {
    callback(image.path);
  });
};
