import React, { useEffect, useRef } from 'react';
import { dequal } from 'dequal';

function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useCompareEffect 不应在没有依赖项的情况下使用。')
  }
  if (deps.every(isPrimitive)) {
    throw new Error('useCompareEffect不应与所有基元值的依赖项一起使用')
  }
}

function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val)
}

function useDeepCompareMemoize(value) {
  const ref = useRef();
  const signalRef = useRef(0);

  if (!dequal(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }

  return [signalRef.current];
}

function useDeepCompareEffect(callback, dependencies) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, useDeepCompareMemoize(dependencies))
}

export function useDeepCompareEffectNoCheck(callback, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, useDeepCompareMemoize(dependencies))
}

export default useDeepCompareEffect
