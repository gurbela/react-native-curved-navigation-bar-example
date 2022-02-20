declare module '*.svg' {
   import {SvgProps} from 'react-native-svg';
   const content: React.FC<SvgProps>;
   export default content;
}

declare module '*.jpeg' {
   const content: {
      uri: string;
   };
   export default content;
}

declare module '*.png' {
   const content: {
      uri: string;
   };
   export default content;
}
