// In your packages/ui/Button.tsx
import { Text, TouchableOpacity } from 'react-native';
import { cssInterop } from 'nativewind';

// Make sure you have cssInterop for ALL React Native components
const StyledTouchableOpacity = cssInterop(TouchableOpacity, {
  className: 'style'
});

const StyledText = cssInterop(Text, {
  className: 'style'
});

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

export const Button = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false
}: ButtonProps) => {
  // For debugging
 
  const variantClasses = {
    primary: 'bg-red text-white',
    secondary: 'bg-gray-200 text-gray-800',
    outline: 'bg-transparent border border-primary text-primary',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-2',
    md: 'py-2 px-4',
    lg: 'py-3 px-6',
  };

  return (
    <StyledTouchableOpacity 
      className={`rounded-lg ${
        variant === 'primary' ? 'bg-primary text-white' : 
        variant === 'secondary' ? 'bg-gray-200 text-gray-800' : 
        'bg-transparent border border-primary text-primary'
      } ${
        size === 'sm' ? 'py-1 px-2' : 
        size === 'md' ? 'py-2 px-4' : 
        'py-3 px-6'
      } ${
        fullWidth ? 'w-full' : 'w-auto'
      }`}
      onPress={onPress}
    >
      <StyledText 
        className={`text-center font-medium ${
          variant === 'primary' ? 'text-white' : 
          variant === 'secondary' ? 'text-gray-800' : 
          'text-primary'
        }`}
      >
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
};