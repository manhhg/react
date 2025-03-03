/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import typeof * as FeatureFlagsType from 'shared/ReactFeatureFlags';
import typeof * as ExportsType from './ReactFeatureFlags.testing.www';

export const debugRenderPhaseSideEffectsForStrictMode = false;
export const enableDebugTracing = false;
export const enableSchedulingProfiler = false;
export const replayFailedUnitOfWorkWithInvokeGuardedCallback = false;
export const enableProfilerTimer = false;
export const enableProfilerCommitHooks = false;
export const enableProfilerNestedUpdatePhase = false;
export const enableProfilerNestedUpdateScheduledHook = false;
export const enableUpdaterTracking = false;
export const enableCache = true;
export const enableLegacyCache = true;
export const enableCacheElement = true;
export const enableFetchInstrumentation = false;
export const disableJavaScriptURLs = true;
export const disableCommentsAsDOMContainers = true;
export const disableInputAttributeSyncing = false;
export const enableSchedulerDebugging = false;
export const enableScopeAPI = true;
export const enableCreateEventHandleAPI = true;
export const enableSuspenseCallback = true;
export const warnAboutDefaultPropsOnFunctionComponents = true;
export const warnAboutStringRefs = true;
export const disableLegacyContext = __EXPERIMENTAL__;
export const disableSchedulerTimeoutBasedOnReactExpirationTime = false;
export const enableTrustedTypesIntegration = false;
export const disableTextareaChildren = __EXPERIMENTAL__;
export const disableModulePatternComponents = true;
export const warnAboutSpreadingKeyToJSX = true;
export const enableSuspenseAvoidThisFallback = true;
export const enableSuspenseAvoidThisFallbackFizz = false;
export const enableCPUSuspense = true;
export const enableUseHook = true;
export const enableUseMemoCacheHook = false;
export const enableUseEffectEventHook = false;
export const enableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay = true;
export const enableClientRenderFallbackOnTextMismatch = true;
export const enableComponentStackLocations = true;
export const enableLegacyFBSupport = !__EXPERIMENTAL__;
export const enableFilterEmptyStringAttributesDOM = false;
export const disableNativeComponentFrames = false;
export const skipUnmountedBoundaries = true;
export const deletedTreeCleanUpLevel = 3;
export const enableGetInspectorDataForInstanceInProduction = false;
export const deferRenderPhaseUpdateToNextBatch = false;

export const createRootStrictEffectsByDefault = false;
export const enableUseRefAccessWarning = false;

export const disableSchedulerTimeoutInWorkLoop = false;
export const enableLazyContextPropagation = false;
export const enableLegacyHidden = false;
export const enableSyncDefaultUpdates = true;
export const enableUnifiedSyncLane = __EXPERIMENTAL__;
export const allowConcurrentByDefault = true;
export const enableCustomElementPropertySupport = false;

export const consoleManagedByDevToolsDuringStrictMode = false;
export const enableServerContext = true;
// Some www surfaces are still using this. Remove once they have been migrated.
export const enableUseMutableSource = true;

export const enableTransitionTracing = false;

export const enableFloat = true;
export const enableHostSingletons = true;

export const useModernStrictMode = false;
export const enableFizzExternalRuntime = false;

// Flow magic to verify the exports of this file match the original version.
((((null: any): ExportsType): FeatureFlagsType): ExportsType);
