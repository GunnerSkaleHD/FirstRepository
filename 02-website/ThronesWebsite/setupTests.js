import '@testing-library/jest-dom';
import {vi} from "vitest";

// Mock global objects (if needed)
global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

// Set up custom environment variables
process.env.TEST_ENVIRONMENT = 'testing';