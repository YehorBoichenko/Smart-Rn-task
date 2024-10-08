/**
 * A functional component that renders a `div` element with a default CSS class of 'wrapper'.
 * Additional CSS classes can be passed in via the `className` prop. The component also
 * accepts children elements to be rendered inside the `div`.
 * @param {WrapperProps} props - The properties object for the component.
 * @param {string} [props.className] - Optional additional CSS class names to apply to the `div`.
 * @param {React.ReactNode} [props.children] - Optional children elements to be rendered inside the `div`.
 *
 * @returns {JSX.Element} The rendered `div` element with the combined class names and children.
 */
import React from 'react';
import { View } from 'react-native';
import { WrapperProps } from '@/types/wrapper';
import { styles } from '@/styles/Wrapper.styles';

export const Wrapper: React.FC<WrapperProps> = ({ style, children }) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};