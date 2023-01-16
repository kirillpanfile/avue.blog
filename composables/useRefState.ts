import { readonly, ref, Ref, DeepReadonly, UnwrapRef } from 'vue'

export function useRefState<T>(
  initialState: T
): readonly [Readonly<Ref<DeepReadonly<UnwrapRef<T>>>>, (newState: T) => void] {
  const state = ref(initialState)

  const setState = (newState: T) => {
    state.value = newState as UnwrapRef<T>
  }

  return [readonly(state), setState] as const
}
