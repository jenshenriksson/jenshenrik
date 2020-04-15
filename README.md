# Testing Improvements for Deep Neural Networks in Autonomous Systems

## Jens Henriksson

## Abstract
As the performance of deep learning models have skyrocketed past decade, the potential application domain has grown rapidly. One application domain is autonomous driving which includes several safety-critical applications within the system, such as situational awareness by mapping the surroundings. This mapping is done by fusion of a set of sensors including LiDAR's, radar's, cameras etc. 

For top performing object classification, deep learning algorithms operating on camera imagery are performing state of the art. However, they fail to cover the full spectrum due to images consisting of a vast parameter space. The new safety standard SOTIF has the intention of catching algorithmic errors when the function is simply not trained enough, however to show this behavior is a difficult task. To catch these algorithm errors, new methods that catch when the function operates on input data that is outside of the scope of the functionality has to be designed, tested and argued for. 

In this thesis, methods that evaluate if an input sample differ from the training domain are evaluated and tested in different settings. These outlier samples, referred to out-of-distribution samples, indicates when the system is out of its safety zone and should be treated wih caution. Our findings suggest that out-of-distribution detection and training of the deep neural network is a delicate balance, as small changes in the network structure, parameters and performance can vastly change the probability to detect these outliers. 

# Thesis included papers
1. [*Automotive safety and machine learning: Initial results from astudy on how to adapt the ISO 26262 safety standard*](https://dl.acm.org/doi/pdf/10.1145/3194085.3194090), Jens Henriksson, Markus Borg, Cristofer Englund. IEEE/ACM International Workshop on Software Engineering for AI in Autonomous Systems (SEFAIAS) 2018

Machine learning (ML) applications generate a continuous streamof success stories from various domains. ML enables many novelapplications, also in safety-critical contexts. However, the func-tional safety standards such as ISO 26262 did not evolve to coverML. We conduct an exploratory study on which parts of ISO 26262represent the most critical gaps between safety engineering and MLdevelopment. While this paper only reports the rst steps towarda larger research endeavor, we report three adaptations that arecritically needed to allow ISO 26262 compliant engineering, andrelated suggestions on how to evolve the standard.

2. [*Towards Structured Evaluation of Deep Neural Network Supervisors*](https://arxiv.org/pdf/1903.01263.pdf), Jens Henriksson, Christian Berger, Markus Borg, Lars Tornberg, Cristofer Englund, Sankar Raman Sathyamoorthy, Stig Ursing. IEEE International Conference On Artificial Intelligence Testing (AITest) 2019

Deep Neural Networks (DNN) have improved the quality of several non-safety related products in the past years.
However, before DNNs should be deployed to safety-critical applications, their robustness needs to be systematically analyzed.
A common challenge for DNNs occurs when input is dissimilar to the training set, which might lead to high confidence predictions
despite proper knowledge of the input. Several previous studies have proposed to complement DNNs
with a supervisor that detects when inputs are outside the scope of the network. Most of these supervisors, however, are developed
and tested for a selected scenario using a specific performance metric. In this work, we emphasize the need to assess and
compare the performance of supervisors in a structured way. We present a framework constituted by four datasets organized
in six test cases combined with seven evaluation metrics. The test cases provide varying complexity and include data
from publicly available sources as well as a novel dataset consisting of images from simulated driving scenarios. The latter
we plan to make publicly available. Our framework can be used to support DNN supervisor evaluation, which in turn could be
used to motive development, validation, and deployment of DNNs in safety-critical applications.

3. **Under review:** [*Performance Analysis of Out-of-Distribution Detection on Trained Neural Networks*](https://github.com/jenshenriksson/jenshenriksson.github.io/blob/master/2019_IST_Preprint.pdf), Jens Henriksson, Christian Berger, Markus Borg, Lars Tornberg, Sankar Raman Sathyamoorthy,  Cristofer Englund. Under review for a special track in Journal of Information and Software Technology 2020

**Context:** Deep Neural Networks have shown great promise in various fields. However, before deploying these neural networks, the models need to be tested for robustness. One common challenge occurs when the model is exposed to samples outside of the intended operating domain, which can yield outputs with high confidence despite no prior knowledge of the input. **Objective:** The aim of this paper is to investigate how the performance of detecting out-of-distribution samples changes for outlier detection methods, as a deep neural network becomes better on training samples.  **Method:** Our experimental setup defines comparable metrics and datasets that reflect the most common setups in related work. The experimental setup allows for a fair comparison of supervisors, i.e methods with the goal of detecting out-of-distribution samples to a deep neural network. In order to enhance the comparison, four different deep neural networks are compared with three different supervisors during different stages of training, to detect when the performance of the supervisors begins to deteriorate. **Results:** We find that all supervisors has increased outlier detection performance as the quality of the model improves. However, we also find that all supervisors inherit a large variation in performance, which is affected by small variations in the network parameters, as well requiring parameter tuning. We observe that understanding the relationship between training results and supervisor performance is crucial to improve the model's robustness and to indicate, what input samples require further measures to improve the robustness of a DNN. **Conclusion:** Analysing Deep Neural Networks for robustness is a challenging task. We show that small variations in model parameters can have large impact on out-of-distribution detection performance. This kind of model behavior needs to be addressed to allow for safety argumentation of how deep neural networks shall be tested. 

## Additional papers
* **[Performance Analysis of Out-of-Distribution Detection on Various Trained Neural Networks](https://ieeexplore.ieee.org/abstract/document/8906748)**

* [Controlled time series generation for automotive software-in-the-loop testing using GANs](https://arxiv.org/pdf/2002.06611.pdf)


