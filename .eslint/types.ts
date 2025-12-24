import type { Linter } from 'eslint';

/**
 * ESLint configuration types
 * Centralized type definitions for ESLint configurations
 */

type RulesConfig = Linter.RulesRecord;
export type ConfigWithExtends = Linter.Config<Linter.RulesRecord>;
