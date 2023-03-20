## Purpose

This conformance package provides a cross-platform definition of the test cases for auto linking, extracting and hit
highlighting of posts. The primary use for this is the micro-text-* libraries.

The reason for this conformance suite is to provide a way to keep the various implementations of Micro text handling
working in a consistent and interoperable way. While anyone can feel free to implement this logic however they choose
the recommendation to developers is to use libraries which pass this conformance suite.

## Format

The test cases are stored in YAML files. There is one YAML file for each major operation type, and within those files
there is one section for each publicly accessible API. Each test case is defined by:

 * description: This provides a meaningful name for the test case, for use as an error message if a test fails.
 * text: The input text of the Post.
 * expected: What results are expected for this input text

## Guidelines for use

If you are creating a new micro-text library in a different programming language please follow these few guidelines:

1. Create a test which reads these files and executes the test cases.
  1.a. Do not convert these files to test cases statically. These test cases will change over time.

2. Be sure to implement all of the publicly accessible APIs (the keys to the YAML file)

3. Only expose the public API method and not the underlying regular expressions
  3.a. If your language or environment does not allow for this please make a comment to the effect
  3.b. This prevents breakage when regular expressions need to change in fundamental ways
