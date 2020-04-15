# Testing Improvements for Deep Neural Networks in Autonomous Systems

## Jens Henriksson

## Abstract
As the performance of deep learning models have skyrocketed past decade, the potential application domain has grown rapidly. One application domain is autonomous driving which includes several safety-critical applications within the system, such as situational awareness by mapping the surroundings. This mapping is done by fusion of a set of sensors including LiDAR's, radar's, cameras etc. 

For top performing object classification, deep learning algorithms operating on camera imagery are performing state of the art. However, they fail to cover the full spectrum due to images consisting of a vast parameter space. The new safety standard SOTIF has the intention of catching algorithmic errors when the function is simply not trained enough, however to show this behavior is a difficult task. To catch these algorithm errors, new methods that catch when the function operates on input data that is outside of the scope of the functionality has to be designed, tested and argued for. 

In this thesis, methods that evaluate if an input sample differ from the training domain are evaluated and tested in different settings. These outlier samples, referred to out-of-distribution samples, indicates when the system is out of its safety zone and should be treated wih caution. Our findings suggest that out-of-distribution detection and training of the deep neural network is a delicate balance, as small changes in the network structure, parameters and performance can vastly change the probability to detect these outliers. 

# Thesis included papers
1. [Automotive safety and machine learning: Initial results from astudy on how to adapt the ISO 26262 safety standard](https://dl.acm.org/doi/pdf/10.1145/3194085.3194090)
2. [Towards Structured Evaluation of Deep Neural Network Supervisors](https://arxiv.org/pdf/1903.01263.pdf)
3. [**Under review:** Performance Analysis of Out-of-Distribution Detection on Trained Neural Networks](https://github.com/jenshenriksson/jenshenriksson.github.io/blob/master/2019_IST_Preprint.pdf)

## Additional papers
* [Performance Analysis of Out-of-Distribution Detection on Various Trained Neural Networks](https://ieeexplore.ieee.org/abstract/document/8906748)

* [Controlled time series generation for automotive software-in-the-loop testing using GANs](https://arxiv.org/pdf/2002.06611.pdf)


