import { ComponentClass, ReactNode } from 'react';

export interface CBreadcrumbProps {
  /**
   * 自定义额外类名
   */
  className?: string;

  /**
   * item展示数据，有breads数据，不展示item内容
   */
  breads?: array;
}

export interface ItemProps {
  /**
   * 显示内容
   */
  title: string | ReactNode;

  /**
   * 跳转的链接
   * 千牛端为navigate跳转的路径，h5端可使用外链
   */
  href: string;

  /**
   * 自定义额外类名
   */
  className?: string;
}

export interface CBreadcrumbState {}

declare const CBreadcrumbProps: ComponentClass<CBreadcrumbProps>;
