/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { filter, OperatorFunction } from 'rxjs';
import { ChatCompletionChunkEvent, ChatCompletionEvent, ChatCompletionEventType } from '.';

export function withoutChunkEvents<T extends ChatCompletionEvent>(): OperatorFunction<
  T,
  Exclude<T, ChatCompletionChunkEvent>
> {
  return filter(
    (event): event is Exclude<T, ChatCompletionChunkEvent> =>
      event.type !== ChatCompletionEventType.ChatCompletionChunk
  );
}
