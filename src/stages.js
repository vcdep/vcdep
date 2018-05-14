export default {
  checkout: {
    name: 'Checkout',
    image: 'checkout.png',
    text:
      'Checkout is where Jenkins locates your repository and pulls it down for testing. This involves detecting a change from GitHub on a branch. Jenkins also must switch the default branch, which is normally master, to the branch where the change was made. Another thing that happens in this stage is that the configuration file which is stored in the repository is read in by Jenkins, so it can figure out the language the project is written in and what stages of the pipeline it needs to run the code through. Since this is the entry point into the pipeline it is required for all Jenkins builds.',
  },
  static: {
    name: 'Static Analysis',
    image: 'static.png',
    text:
      "Static Analysis is a type of test where code is not executed. This is useful for checking source code for common pitfalls that developers make using something called a coding standard. Coding standards are human made policies on how code should be written to avoid common errors and faulty patterns. Another thing Static Analysis can test for are things called coding styles. Coding styles are the aesthetic appearance of the code. An example might be how some people place curly braces on the same line as function signatures, also called headers, and some people do it below. To keep a software system's code looking the same we use coding style policies. When Jenkins performs Static Analysis, it tests against a coding standard and coding style. All the errors and warnings are displayed in the logs; however, you may notice that even though the Static Analysis stage shows it failed Jenkins continues as though it succeeded. This is because Static Analysis, for the scope of this tool, is not critical since most of the issues it detects is styling. So, for instructive purposes, Jenkins just ignores any failures that result during Static Analysis testing. You would not do this for a real software system.",
  },
  unit: {
    name: 'Unit Testing',
    image: 'unit.png',
    text:
      "During unit testing, the Jenkins runs all the user's unit tests that are specified in the project. Since this is doing Unit Testing there is no connection to external services like databases, it only tests individual functions for their correctness. This allows developers to debug and vary a piece of their software system does what it was designed to do. Due to the importance and helpfulness of unit tests. The CDEP system requires a software project include unit tests else it will fail the build. If you wish to not perform unit testing you will need to specify that inside of the config.json in the project repository before pushing any changes to GitHub.",
  },
  integration: {
    name: 'Integration Testing',
    image: 'integration.png',
    text:
      'During integration testing, the Jenkins server attempts to integrate any modules present in the build. Integration testing allows the user to identify places where syntactically correct code that passes unit testing fails to integrate during execution. This stage finalizes the "integration" portion of Continuous Integration and Delivery.',
  },
  deploy: {
    name: 'Deploy',
    image: 'deploy.png',
    text:
      'During the deployment stage, the Jenkins server deploys the build to the production environment. This can be the actual production environment, or a simulated production environment hosted on virtual machines. This stage constitutes the "delivery" portion of Continuous Integration and Delivery.',
  },
  build: {
    name: 'Build',
    image: 'build.png',
    text:
      'The build stage is not used for PHP projects, only for Java projects. During the build stage, the Jenkins server compiles the Java code and creates the executable file.',
  },
};
